set autoscale
unset log
unset label
set xtic auto
set ytic auto
set title "Latency"
set xlabel "Request Times (ms)"
set ylabel "Latency (ms)"
plot "single_server_100ms_delay.txt" using 2:5 with lines title 'Single Server (100ms)', \
'load_balancer_100ms_delay.txt' using 2:5 every ::::2973 with lines title 'Load Balancer (100ms)', \
'load_balancer_55ms_delay.txt' using 2:5 with lines title 'Load Balancer (55ms)'
