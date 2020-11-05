pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {  
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
	
	stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { bat 'npm run-script lint' }
        }
      }
    }   
  }
}
