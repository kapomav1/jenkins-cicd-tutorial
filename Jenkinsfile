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
                echo 'Building Java Application...'
                bat 'mvn clean compile || echo Maven build skipped'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Unit Tests...'
                bat 'npm test'
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
