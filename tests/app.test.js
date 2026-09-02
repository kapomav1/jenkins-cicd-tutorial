const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

describe('Jenkins CI/CD Tutorial Project Tests', () => {
    test('Project files should exist', () => {
        expect(fs.existsSync(path.join(__dirname, '../pom.xml'))).toBe(true);
        expect(fs.existsSync(path.join(__dirname, '../Jenkinsfile'))).toBe(true);
        expect(fs.existsSync(path.join(__dirname, '../Dockerfile'))).toBe(true);
        expect(fs.existsSync(path.join(__dirname, '../src/main/java/com/example/App.java'))).toBe(true);
        expect(fs.existsSync(path.join(__dirname, '../src/test/java/com/example/AppTest.java'))).toBe(true);
    });

    test('Jenkinsfile content should include key CI/CD stages', () => {
        const jenkinsfileContent = fs.readFileSync(path.join(__dirname, '../Jenkinsfile'), 'utf8');
        expect(jenkinsfileContent).toContain("stage('Build')");
        expect(jenkinsfileContent).toContain("stage('Test')");
        expect(jenkinsfileContent).toContain("stage('Docker Build & Deploy')");
    });
});
