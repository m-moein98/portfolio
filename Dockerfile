FROM nginx:alpine
COPY index.html robots.txt sitemap.xml Madi_Moein_Resume.pdf /usr/share/nginx/html/
EXPOSE 80
