FROM nginx:alpine
COPY index.html robots.txt sitemap.xml Madi_Moen_Resume.pdf /usr/share/nginx/html/
EXPOSE 80
