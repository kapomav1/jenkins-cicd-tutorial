pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jenkins-tutorial-app'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out branch: ${env.BRANCH_NAME ?: 'main'}..."
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Application...'
                bat 'echo Build completed successfully'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Unit Tests...'
                bat 'npx -y jest'
            }
        }

        stage('Package & Docker Simulation') {
            steps {
                echo 'Packaging application artifact...'
                echo 'Simulating Docker image build and push...'
                bat 'echo Docker Image jenkins-tutorial-app built successfully'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo "Branch ${env.BRANCH_NAME ?: 'main'} Build & Testing completed SUCCESSFULLY!"
        }
    }
}
