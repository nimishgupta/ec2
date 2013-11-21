#! /usr/bin/python

import cgi
import cgitb
cgitb.enable ()


form = cgi.FieldStorage ()



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
"""

if "num" not in form:
  print "<h2> Missing number </h2>"
else:
  print "<h3> The requested fibonacci number is :  "
  print fib (int (form["num"].value))
  print "</h3>"
  print """
      </BODY>
    </HTML>
  """
