pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jenkins-tutorial-app'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from Git repository...'
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

        stage('Package') {
            steps {
                echo 'Packaging application...'
                echo 'Build completed successfully.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo 'Build and Testing completed SUCCESSFULLY!'
        }
    }
}
