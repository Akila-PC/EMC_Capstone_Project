FROM node:20
WORKDIR /calculator
COPY calculator.html .
COPY calculator.js .
EXPOSE 5000 
CMD [ "node","calculator.js" ]
