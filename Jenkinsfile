@Library('ecom-shared-lib') _

ciPipeline(
    serviceName: 'ecom-product-service',
    imageName: '3020244252/ecom-product-service',
    dockerCredentialsId: 'dockerhub-creds',
    buildCommand: 'npm ci && npm run lint && npm run build',
    testCommand: 'npm test',
    devDeployCommand: 'docker rm -f ecom-product-service-dev || true && docker run -d --name ecom-product-service-dev -p 3101:3001 $IMAGE_NAME:$BUILD_TAG_NAME',
    stagingDeployCommand: 'docker rm -f ecom-product-service-staging || true && docker run -d --name ecom-product-service-staging -p 3201:3001 $IMAGE_NAME:$BUILD_TAG_NAME',
    prodDeployCommand: 'docker rm -f ecom-product-service-prod || true && docker run -d --name ecom-product-service-prod -p 3301:3001 $IMAGE_NAME:$BUILD_TAG_NAME'
)