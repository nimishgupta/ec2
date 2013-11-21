#! /usr/bin/python


def fib (n):
  if n <= 1: return 1
  else:      return fib (n-1) + fib (n-2)


print "Content-Type: text/html"
print
print """
  <HTML>
    <HEAD>
      <TITLE>Python fibonacci</TITLE>
    </HEAD>

    <BODY>
      <h3> The requested fibonacci number is :  
"""
print fib (10)
print "</h3></BODY></HTML>"
