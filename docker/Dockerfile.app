FROM mynodejs

WORKDIR /home/app
COPY app /home/app

RUN npm install

ENTRYPOINT node /home/app/build/index.js
