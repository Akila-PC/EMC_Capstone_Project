#!/bin/bash

LOG_DIR="/home/ubuntu/backups"
find $LOG_DIR -type f -name "*.txt" -mtime +7 -exec rm {} \;
find $LOG_DIR -type f -name "*.tar" -mtime +7 -exec rm {} \;
echo "Old logs and backups cleaned up at $(date)"
