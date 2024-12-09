pipeline {
    agent any
    environment {
        PAT_CREDENTIALS_ID = "PAT_Jenkins"
        DOCKER_CREDENTIALS_ID = "docker-hub"
        FRONTEND_IMAGE = "tuandanh123/siu-backend:latest"
        BACKEND_IMAGE = "tuandanh123/siu-frontend:latest"
        COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tuandanh123/Print-Service.git', credentialsId: "${PAT_CREDENTIALS_ID}"
                echo "Git repository checked out successfully."
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo "Building Docker images for frontend and backend..."
                    withDockerRegistry([credentialsId: "${DOCKER_CREDENTIALS_ID}", url: 'https://index.docker.io/v1/']) {
                        sh """
                        docker build -t ${FRONTEND_IMAGE} -f ./client/Dockerfile ./client &&
                        docker push ${FRONTEND_IMAGE}
                        docker build -t ${BACKEND_IMAGE} -f ./server/Dockerfile ./server &&
                        docker push ${BACKEND_IMAGE}
                        """
                    }
                    echo "Docker images built and pushed successfully."
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo "Deploying services using Docker Compose..."
                    dir("${WORKSPACE}") {
                        sh """
                        /usr/local/bin/docker-compose pull
                        /usr/local/bin/docker-compose down --remove-orphans || true
                        /usr/local/bin/docker-compose up -d --force-recreate
                        """
                    }
                    echo "Services deployed successfully."
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline execution complete."
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
    }
}
