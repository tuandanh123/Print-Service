FROM maven:3.8.7-amazoncorretto-19 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn package -DskipTests

FROM amazoncorretto:19-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]

