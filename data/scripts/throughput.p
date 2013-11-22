set autoscale
unset log
unset label
set xtic auto
set ytic auto
set title "Throughput"
set xlabel "Time (5 sec)"
set ylabel "Throughput (req/(5 sec))"
plot file1 using 1:2 with lines title 'Single Server (100ms)', \
file2 using 1:2 with lines title 'Load Balancer (100ms)', \
file3 using 1:2 with lines title 'Load Balancer (55ms)'
