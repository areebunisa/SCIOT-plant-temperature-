# SCIOT-plant-temperature-
Serverless computing for iot unisa 


Temperature measurement and analysis is plays a key role in metal processing, as well as monitoring. If the temperature measurement information is not correct, then it can affect quality of the final product, as well as endanger workplace security.


How Temperature Measurement is Important in Different Industries?
An accurate determination of temperature, or the measure of hot or cold, is an important factor in many industries as follows:


Food and Beverage Processing:
Measurement and control of temperature is of utmost importance for both food and beverage processing manufacturers. Temperature is one of the important factors to consider during the bulk production of food items.


Beverage industry
Temperature plays a vital role in deciding the quality of the final product. During the wine making or brewing process, the ambient temperature, as well as fermentation temperature, could have a positive or negative effect. Even in the process of milk pasteurization, the temperature is important to ensure the removal of harmful pathogens, such as Escherichia, Salmonella, and Listeria.


Plastic Production
Temperature plays an important role in the plastic industry. During the manufacturing stages, for example thermoforming, or injection molding, several temperature ranges needs to be monitored to ensure a high product quality.


Metal Processing:
Be it any type of metal process plant, temperature measurement is always high on the list for operational excellence. Temperature measurement and analysis is plays a key role in metal processing, as well as monitoring. If the temperature measurement information is not correct, then it can affect quality of the final product, as well as endanger workplace security.


Pre requisites of this project

On windows desktop download docker and by using command line we can setup nuclio dashboard and rabbit MQ

installation of libraries

Docker

Nuclio dashboard

RabbitMQ

Node.js

IFTT

MQTIZER - Free MQTT Client


Install these libraries by using command prompt

npm install mqtt

npm install amqplib

npm install request



Architecture Diagram 
![Architecture SCIOT](https://user-images.githubusercontent.com/77137106/157632668-f59db4ce-f91e-4214-9a57-dc30ae606c81.png)




Docker


Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.

Docker provides tooling and a platform to manage the lifecycle of your containers.

Develop your application and its supporting components using containers.

The container becomes the unit for distributing and testing your application.

When you’re ready, deploy your application into your production environment.

Docker is an open platform for developing, shipping, and running applications. 

Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.

Download docker setup from this link

https://www.docker.com/products/docker-desktop


Nuclio dashboard



Nuclio is a high-performance "serverless" framework focused on data, I/O, and compute intensive workloads, Nuclio is extremely fast a single function instance can process hundreds of thousands of HTTP requests or data records per second. This is 10-100 times faster than some other frameworks
.
By using this command line we can run Nuclio dashboard

docker run -p 8070:8070 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp nuclio/dashboard:stable-amd64


RabbitMQ



RabbitMQ is open source message broker software (sometimes called message-oriented middleware) that implements the Advanced Message Queuing Protocol (AMQP). The RabbitMQ server is written in the Erlang programming language and is built on the Open Telecom Platform framework for clustering and failover. Client libraries to interface with the broker are available for all major programming languages.


By using this command line we can run rabbit MQ


docker run -p 9000:15672 -p 1883:1883 -p 5672:5672 cyrilix/rabbitmq-mqtt



Node js
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
Download Node.js from this link
https://nodejs.org/en/



IFTTT
If This Then That is a private commercial company that runs services that allow a user to program a response to events in the world. IFTTT has partnerships with different service providers that supply event notifications to IFTTT and execute commands that implement the responses.
Create a free account
https://ifttt.com/join
Browse the IFTTT website or app to find something that interests you.

Connect the [services] https://ifttt.com/services that are involved in the Applet or connection.



MQTIZER - Free MQTT Client
MQTT stands for Message Queue Telemetry Transport. It is a publish/subscribe, extremely simplistic and lightweight messaging protocol, devised for constrained devices and low-bandwidth, high-latency or unreliable networks. The design principles are to minimise network bandwidth and device resource requirements whilst also attempting to ensure reliability and some degree of assurance of delivery. These principles also turn out to make the protocol ideal of the emerging “machine-to-machine” (M2M) or “Internet of Things” world of connected devices, and for mobile applications where bandwidth and battery power are at a premium.
Dowload and install
https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en&gl=US



PROJECT ACTIVITY WORK



![Docker container](https://user-images.githubusercontent.com/77137106/157602179-dbe02a77-b7d5-478b-9c97-07b8125c80b7.png)
![IFTT 2](https://user-images.githubusercontent.com/77137106/157602183-5fc8e2b1-9801-4b6d-8931-034ec9b0e120.png)
![IFTT EMAIL](https://user-images.githubusercontent.com/77137106/157602187-cc0fcb9c-8132-44a6-930b-ffb099bfd6fb.png)
![IP](https://user-images.githubusercontent.com/77137106/157602188-622a2f99-82cf-4027-a124-2b954e2ec120.png)
![libraries installation](https://user-images.githubusercontent.com/77137106/157602189-6194e7d6-2515-4532-a196-fbff8b1ab587.png)
![MQTIZER Results](https://user-images.githubusercontent.com/77137106/157602190-1198920d-49a6-49ce-99a9-2f96790485ad.jpeg)
![MQTIZER SETUP](https://user-images.githubusercontent.com/77137106/157602192-e75b1eea-e09c-4db8-acc0-96e60a90fb96.jpeg)
![Nuclio Dashboard (2)](https://user-images.githubusercontent.com/77137106/157602194-a0c4a6bd-54b1-4f86-a2ba-56d927b13353.png)
![Nuclio dashboard installation](https://user-images.githubusercontent.com/77137106/157602196-aea92ca2-6bd2-44cd-95d6-2cfa53c4bb87.png)
![Nuclio dashboard](https://user-images.githubusercontent.com/77137106/157602197-841ea7a2-8f88-4bee-930b-f90170d0c347.png)
![Plant_temperature](https://user-images.githubusercontent.com/77137106/157602198-51f18930-2a4e-454d-a513-b5728e8899b7.png)
![Rabbit MQ Dashboard](https://user-images.githubusercontent.com/77137106/157602202-52a8e6a8-9625-4ac0-abd3-65d08461276b.png)
![Rabbit MQ installation](https://user-images.githubusercontent.com/77137106/157602204-dda9f794-5559-402a-8922-d0adefb29a83.png)
![Result of temperature with CMD Windows](https://user-images.githubusercontent.com/77137106/157602209-4dc2d855-87e8-45bc-8fda-deb33da3b10d.png)
![Values of temperatue with Node JS command Prompt](https://user-images.githubusercontent.com/77137106/157602213-a6d1fde2-1f58-41fe-8a3b-8d8aa52a2b1f.png)
![webhooks](https://user-images.githubusercontent.com/77137106/157602214-fb4fdbea-92b3-45cc-a4a4-a6454f93cc44.png)



