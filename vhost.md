<VirtualHost **:80>
> ServerName   trongnv.localhost**

> DocumentRoot /home/trongnv/vhost

> <Directory /home/trongnv/vhost>
> > Options Indexes FollowSymLinks MultiViews
> > AllowOverride None
> > Order allow,deny
> > allow from all

> 

Unknown end tag for &lt;/Directory&gt;



> ErrorLog ${APACHE\_LOG\_DIR}/error.log

  1. Possible values include: debug, info, notice, warn, error, crit,
  1. alert, emerg.
> LogLevel warn

> CustomLog ${APACHE\_LOG\_DIR}/access.log combined


Unknown end tag for &lt;/VirtualHost&gt;

