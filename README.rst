pelican-flamel
==============

.. _Pelican: https://github.com/getpelican/pelican
.. _Alchemy: https://github.com/nairobilug/pelican-alchemy
.. _Icarus:  https://github.com/ppoffice/hexo-theme-icarus

A theme for the Pelican_ static site generator. Inspired by nairobilug's Alchemy_ and ppoffice's Icarus_ themes.

Features
--------

- Responsive design from monitor to smartphones.
- Blog-specific navigation bar.
- Image previews for articles.
- Optional IntenseDebate, Disqus, and Google Analytics integration.

Install
-------

.. code-block:: sh

	git clone https://github.com/gcavallo/pelican-flamel.git flamel

Then set the pelican config variable ``THEME`` to the ``flamel`` path.

Configure
---------

=================== ===== ================
Variable            Type  Description
=================== ===== ================
**Template**
------------------------------------------
LICENSE_NAME        TEXT  License (footer)
LICENSE_URL         URL
PROFILE_IMAGE       URL   Profile image
SHOW_AUTHOR         BOOL  Show/hide author
SITE_SUBTEXT        TEXT  Header subtitle
------------------- ----- ----------------
**Menu**
------------------------------------------
EMAIL_ADDRESS       EMAIL Email (mailto)
FB_ADDRESS          URL   Facebook
GITHUB_ADDRESS      URL   Github
GOOGLE_ADDRESS      URL   Google+
IN_ADDRESS          URL   LinkedIn
SO_ADDRESS          URL   Stack Overflow
TWITTER_ADDRESS     URL   Twitter
YOUTUBE_ADDRESS     URL   YouTube
------------------- ----- ----------------
**Services**
------------------------------------------
ANALYTICS_ID        TEXT  Google analytics
DISQUS_SITENAME     TEXT  Disqus shortname
ID_ACCT             TEXT  IntenseDebate ID
=================== ===== ================

An RSS icon will also appear on the blog if ``FEED_ATOM`` or ``FEED_RSS`` is set.

See http://docs.getpelican.com/en/latest/settings.html for more settings.

Modify
------

.. _less: https://github.com/less/less.js
.. _clean-css: https://github.com/jakubpawlowicz/clean-css

You need less_ and clean-css_ to compile changes in ``style.less``.

.. code-block:: sh

	lessc flamel/static/less/style.less | cleancss --s0 -o flamel/static/css/style.min.css

License
-------

MIT

See LICENSE file included, or https://opensource.org/licenses/MIT
