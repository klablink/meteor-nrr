Package.describe({
  name: 'konecty:nrr',
  summary: 'Non-Reactive render',
  version: '2.0.2',
  git: 'https://github.com/Konecty/meteor-nrr',
});

Package.onUse(function(api) {
  api.use('coffeescript');
  api.use("templating", "client", {weak: true});

  api.addFiles('konecty:nrr.coffee');
});
