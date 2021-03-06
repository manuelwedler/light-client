ARG RAIDEN_VERSION="v1.1.1"
ARG CONTRACTS_PACKAGE_VERSION="0.37.1"
ARG CONTRACTS_VERSION="0.37.0"
ARG SERVICES_VERSION="v0.13.1"
ARG SYNAPSE_VERSION="v1.19.1"
ARG OS_NAME="LINUX"
ARG GETH_VERSION="1.9.23"
ARG GETH_URL_LINUX="https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.9.23-8c2f2715.tar.gz"
ARG GETH_MD5_LINUX="4817ce02025ba3f876f7055e1e456555"

FROM python:3.7 as raiden-builder
ARG RAIDEN_VERSION

# clone raiden repo + install dependencies
RUN git clone -b develop https://github.com/raiden-network/raiden /app/raiden
RUN python3 -m venv /opt/raiden
ENV PATH="/opt/raiden/bin:$PATH"

WORKDIR /app/raiden
RUN git checkout ${RAIDEN_VERSION}
RUN make install

FROM python:3.7 as synapse-builder
ARG SYNAPSE_VERSION

RUN python -m venv /synapse-venv \
    && /synapse-venv/bin/pip install "matrix-synapse==${SYNAPSE_VERSION}" \
    && /synapse-venv/bin/pip install psycopg2 coincurve pycryptodome

COPY synapse/auth/ /synapse-venv/lib/python3.7/site-packages/

FROM python:3.7
LABEL maintainer="Raiden Network Team <contact@raiden.network>"

ARG OS_NAME
ARG GETH_URL_LINUX
ARG GETH_MD5_LINUX
ARG CONTRACTS_VERSION
ARG CONTRACTS_PACKAGE_VERSION
ARG GETH_VERSION

RUN apt-get update \
 && apt-get install -y --no-install-recommends supervisor python3-virtualenv libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*


# https://github.com/nodejs/docker-node/blob/master/14/buster/Dockerfile#L8
ENV NODE_VERSION 14.15.0
RUN ARCH= && dpkgArch="$(dpkg --print-architecture)" \
  && case "${dpkgArch##*-}" in \
    amd64) ARCH='x64';; \
    ppc64el) ARCH='ppc64le';; \
    s390x) ARCH='s390x';; \
    arm64) ARCH='arm64';; \
    armhf) ARCH='armv7l';; \
    i386) ARCH='x86';; \
    *) echo "unsupported architecture"; exit 1 ;; \
  esac \
  # gpg keys listed at https://github.com/nodejs/node#release-keys
  && set -ex \
  && for key in \
    4ED778F539E3634C779C87C6D7062848A1AB005C \
    94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
    1C050899334244A8AF75E53792EF661D867B9DFA \
    71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
    8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 \
    C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
    C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C \
    DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
    A48C2BEE680E841632CD4E44F07496B3EB3C1762 \
    108F52B48DB57BB0CC439B2997B01419BD92F80A \
    B9E2F5981AA6E0CD28160D9FF13993A75599653C \
  ; do \
    gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
    gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
    gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
  done \
  && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
  && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
  && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
  && grep " node-v$NODE_VERSION-linux-$ARCH.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
  && tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
  && rm "node-v$NODE_VERSION-linux-$ARCH.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
  # smoke tests
  && node --version \
  && npm --version

ENV YARN_VERSION 1.22.5
RUN set -ex \
  && for key in \
    6A010C5166006599AA17F08146C2130DFD2497F5 \
  ; do \
    gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
    gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
    gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
  done \
  && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
  && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz.asc" \
  && gpg --batch --verify yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
  && mkdir -p /opt \
  && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
  && ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
  && ln -s /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
  && rm yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
  # smoke test
  && yarn --version

ENV SERVER_NAME=localhost
ENV PASSWORD_FILE=/opt/passwd
ENV PASSWORD=1234

RUN echo ${PASSWORD} > ${PASSWORD_FILE}

COPY setup/ /usr/local/bin

# prepare raiden
COPY --from=raiden-builder /opt/raiden /opt/raiden
COPY raiden/ /opt/raiden/config/

# Download GETH
ARG DEPLOYMENT_DIRECTORY=/opt/deployment
ARG VENV=/opt/raiden
ARG SMARTCONTRACTS_ENV_FILE=/etc/profile.d/smartcontracts.sh

COPY geth/* /usr/local/bin/

ARG LOCAL_BASE=/usr/local
ARG DATA_DIR=/opt/chain

RUN download_geth.sh && deploy.sh \
    && cp -R /opt/deployment/* ${VENV}/lib/python3.7/site-packages/raiden_contracts/data_${CONTRACTS_VERSION}/

RUN mkdir -p /opt/synapse/config \
    && mkdir -p /opt/synapse/data_well_known \
    && mkdir -p /opt/synapse/venv/ \
    && mkdir -p /var/log/supervisor

COPY synapse/synapse.template.yaml /opt/synapse/config/
COPY synapse/exec/ /usr/local/bin/
COPY --from=synapse-builder /synapse-venv /opt/synapse/venv

# Services
ARG SERVICES_VERSION

WORKDIR /opt/services
RUN git clone https://github.com/raiden-network/raiden-services.git
WORKDIR /opt/services/raiden-services
RUN git checkout "${SERVICES_VERSION}"

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3-dev \
    && /usr/bin/python3 -m virtualenv -p /usr/bin/python3 /opt/services/venv \
    && /opt/services/venv/bin/pip install -r requirements.txt \
    && /opt/services/venv/bin/pip install -e . \
    && mkdir -p /opt/services/keystore \
    && cp -R /opt/raiden/lib/python3.7/site-packages/raiden_contracts/data_${CONTRACTS_VERSION}/* /opt/services/venv/lib/python3.7/site-packages/raiden_contracts/data \
    && rm -rf ~/.cache/pip \
    && apt-get -y remove python3-dev \
    && apt-get -y autoremove \
    && apt-get -y clean \
    && rm -rf /var/lib/apt/lists/*

ENV DEPLOYMENT_INFO=/opt/deployment/deployment_private_net.json
ENV DEPLOYMENT_SERVICES_INFO=/opt/deployment/deployment_services_private_net.json

COPY services/keystore/UTC--2020-03-11T15-39-16.935381228Z--2b5e1928c25c5a326dbb61fc9713876dd2904e34 /opt/services/keystore

RUN setup_channels.sh
#                                                           HTTP, HTTP metrics, TCP replication, HTTP replication
# GETH                               | RAIDEN  |SUP |PFS | Matrix
EXPOSE 8545 8546 8547 30303 30303/udp 5001 5002 9001 5555 80 9101 9092 9093

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Install pnpm for nightlies
RUN npm install -g pnpm
RUN pnpm config set store-dir ~/.pnpm-store

# In order to preserve the entrypoint for CicleCI https://circleci.com/docs/2.0/custom-images/#adding-an-entrypoint
LABEL com.circleci.preserve-entrypoint=true

ENTRYPOINT ["entrypoint.sh"]
