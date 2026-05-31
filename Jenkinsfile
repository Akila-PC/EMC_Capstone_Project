pipeline {
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', credentialsId: 'git-cred', url: 'https://github.com/Akila-PC/EMC_Capstone_Project.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    withCredentials([string(credentialsId: 'Jenkins_Token', variable: 'Jenkins_Token')]) {
                        script {
                            def scannerHome = tool 'SonarScanner'
                            sh "${scannerHome}/bin/sonar-scanner \
                                -Dsonar.projectKey=Akila-PC_EMC_Capstone_Project_0c46e5df-2164-496e-b1c8-145c6cfc5d2b \
                                -Dsonar.sources=. \
                                -Dsonar.host.url=http://16.171.159.53:9000 \
                                -Dsonar.token=$Jenkins_Token"
                        }
                    }
                }
            }
        }

        stage('Deploy to Docker Server') {
            steps {
                sshagent(['docker-ssh']) {
                    sh '''
                        ssh ubuntu@13.60.30.2 "
                            docker pull akilapc19/calculatorapp:latest &&
                            docker stop capstone || true &&
                            docker rm capstone || true &&
                            docker run -d --name capstone -p 8080:8080 akilapc19/calculatorapp:latest
                        "
                    '''
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                sshagent(['docker-ssh']) {
                    sh 'ssh ubuntu@13.60.30.2 "docker ps"'
                }
            }
        }
    }
}
