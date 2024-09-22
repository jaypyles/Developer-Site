#!/bin/bash

# Get current branch name
export BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Read args from .env file and export them into the environment
export $(grep -v '^#' .env | xargs)

# Substitute variables from templates into manifests and overwrite the result directly to the target file
envsubst < k8s/templates/frontend-configmap.template.yaml > k8s/manifests/frontend-configmap.yaml
envsubst < k8s/templates/frontend-deployment.template.yaml > k8s/manifests/frontend-deployment.yaml

# Print the output to verify if needed
cat k8s/manifests/frontend-configmap.yaml
