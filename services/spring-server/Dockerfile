FROM maven:3.6.3-openjdk-11
WORKDIR /usr/src/app
COPY src ./src
COPY pom.xml ./
RUN mvn -f ./pom.xml clean package -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true 

EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/src/app/target/swagger-spring-1.0.0.jar"]