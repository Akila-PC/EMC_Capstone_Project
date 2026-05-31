#!/bin/bash

BACKUP_DIR="/home/ubuntu/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mkdir -p $BACKUP_DIR
docker logs capstone > $BACKUP_DIR/capstone_logs_$TIMESTAMP.txt
docker export capstone > $BACKUP_DIR/capstone_container_$TIMESTAMP.tar
docker save akilapc19/calculatorapp:latest > $BACKUP_DIR/calculator_image_$TIMESTAMP.tar
echo "Backup completed at $TIMESTAMP"
