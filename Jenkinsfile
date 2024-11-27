pipeline {
    agent any
    environment {
        // Docker Hub credentials
        PAT_CREDENTIALS_ID = "PAT_Jenkins"
        DOCKER_CREDENTIALS_ID = "tuandanh" // Set Jenkins Docker Hub credentials ID here
        FRONTEND_IMAGE = "siu-backend:latest" // Replace with your Docker frontend image name and tag
        BACKEND_IMAGE = "siu-frontend:latest"    // Replace with your Docker backend image name and tag
        COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the code from a GitHub repository
                git url: 'https://github.com/your-repo/project.git', credentialsId: "${PAT_CREDENTIALS_ID}"
                echo "Git repository checked out successfully."
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    try {
                        echo "Building Docker images for frontend and backend..."
                        withDockerRegistry([credentialsId: "${DOCKER_CREDENTIALS_ID}", url: 'https://index.docker.io/v1/']) {
                            // Build and push frontend image
                            sh """
                            docker build -t ${FRONTEND_IMAGE} -f ./frontend/Dockerfile ./frontend &&
                            docker push ${FRONTEND_IMAGE}
                            """
                            // Build and push backend image
                            sh """
                            docker build -t ${BACKEND_IMAGE} -f ./backend/Dockerfile ./backend &&
                            docker push ${BACKEND_IMAGE}
                            """
                        }
                        echo "Docker images built and pushed successfully."
                    } catch (Exception e) {
                        echo "Error during image build/push: ${e.getMessage()}"
                        throw e
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    try {
                        echo "Deploying services using Docker Compose..."
                        sh """
                        docker-compose down || true
                        docker-compose up -d
                        """
                        echo "Services deployed successfully."
                    } catch (Exception e) {
                        echo "Error during deployment: ${e.getMessage()}"
                        throw e
                    }
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
