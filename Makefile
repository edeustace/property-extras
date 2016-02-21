all:
	rm -fr dist/
	mkdir dist
	zip -r dist/property-extras.zip \
bower_components/jquery/dist/jquery.min.js \
src/css \
src/js \
icons \
manifest.json
