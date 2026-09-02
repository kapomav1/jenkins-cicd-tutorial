pipeline {
    agent any

    tools {
        // Maven tool configuration configured in Jenkins Global Tool Configuration
        maven 'Maven-3.9.0'
        jdk 'JDK-17'
    }

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
                echo 'Building Java Application with Maven...'
                sh 'mvn clean compile'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Unit Tests...'
                sh 'mvn test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }

        stage('Package') {
            steps {
                echo 'Packaging application JAR file...'
                sh 'mvn package -DskipTests'
            }
            post {
                success {
                    archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
                }
            }
        }

        stage('Docker Build & Deploy') {
            steps {
                echo 'Building Docker Container Image...'
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
            cleanWs()
        }
        success {
            echo 'Build, Testing, Packaging, and Docker containerization completed SUCCESSFULLY!'
        }
        failure {
            echo 'Pipeline failed! Please check logs.'
        }
    }
}
