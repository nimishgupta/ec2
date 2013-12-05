#! /bin/bash

# stop all running instances in us-west-2 region
ec2-describe-instances --region us-west-2 | grep INSTANCE | awk '{print $2}' | xargs ec2-stop-instances --region us-west-2
