FROM amazonlinux:latest

# Install dependencies
RUN yum update -y && \
    yum install -y httpd && \
    yum search wget && \
    yum install wget -y && \
    yum install unzip -y

# change directory
RUN cd /var/www/html

# download webfiles
RUN wget https://github.com/clahenry/Units-Converter/blob/main/Units-Converter.zip

# unzip folder
RUN unzip Units-Converter.zip

# copy files into html directory
RUN cp -r Units-Converter/* /var/www/html/

# remove unwanted folder
RUN rm -rf Units-Converter Units-Converter.zip

# exposes port 80 on the container
EXPOSE 80

# set the default application that will start when the container start
ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]