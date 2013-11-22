#! /usr/bin/python


import sys

f = sys.stdin

binsize = 5000

bucket_list = [];

for line in f:
  fields = line.strip ().split ()

  start_time = int (fields[1])
  req_time   = int (fields[4])

  bucket = (start_time + req_time)/binsize

  if (bucket < len (bucket_list)):
    bucket_list[bucket] += 1
  else:
    while ((len (bucket_list)) < bucket):
      bucket_list.append (0)
    bucket_list.append (1)


for index, elem in enumerate (bucket_list):
  print str (index) + " " + str (elem)
