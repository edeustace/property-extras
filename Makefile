all:
	rm -fr dist/
	mkdir dist
	zip -r dist/property-extras.zip \
src/js \
icons \
manifest.json
