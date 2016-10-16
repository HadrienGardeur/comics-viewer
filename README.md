# Comics Viewer

This project is a proof of concept for handling the [Comics Manifest](https://github.com/HadrienGardeur/comics-manifest) in a Web App.

The viewer is a simple Web App that does the following things:

- display the images of the comics in an `img` element
- cache the resources listed in the manifest for offline viewing
- serves the resources using a simple "network then cache" policy with a Service Worker
- navigate between the pages using swipes or previous/next links


##Live Demo

A live demo of the viewer is available at: https://hadriengardeur.github.io/webpub-manifest/examples/comics-viewer

