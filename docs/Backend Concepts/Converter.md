# Converter

## Concepts

+ Converter are used to convert documents into different formats. For example html to pdf or markdown to html.
+ Converters can be used on a single document or a stream of many documents.
+ Furthermore is it possible to chain converters to combine functions like convert to pdf and zip all pdfs after that.

## Known Issues

- cardinality param is not used

## Document Converter API

To add another converter to Ladon implement the DocumentConverter interface. Can be used as a DI component or OSGI service.

```java
public interface DocumentConverter {

    String getId();

    String getDescription();

    List<ConverterParameter> getParams();

    Stream<InMemoryFile> map(Stream<InMemoryFile> inputFiles, Map<String, String> config);

    ConverterCardinality getCardinality();

}
```

- id : unique id of this converter. Peferable use a namespace prefix like "acme/special-converter"
- params : metadata about parameters the converter takes
- map : function that does the actual conversion. Streaming is essential since the input stream can have millions of entries
- cardinality : meta info about input and output to expect

## Converter REST API

![rest-api.png](assets/rest-api-converter.png)

- apply and store : run the converter and store the result in Ladon
- apply and download : run the converter and offer the result as file download
- meta : get information about available converters
- geddocument : same as apply and download but with direct download

## Converter Config

To apply any converter you have to provide the converter by id and it's config.

```json
{
  "inputPaths": [
    "demodata/file1.pdf",
    "demodata/file2.pdf"

  ],
  "converters": [
    {
      "id": "mind/merge-pdf",
      "config": {
        "filename": "output-combined.pdf"
      }
    }
  ]
}
```

## Converter chaining

Converters are designed to be chained together. Converters are applied in the order they are listed in the api.

```json
{
  "inputPaths": [
    "demodata/file1.pdf",
    "demodata/file2.pdf"

  ],
  "converters": [
    {
      "id": "mind/merge-pdf",
      "config": {
        "filename": "output-combined.pdf"
      }
    },
    {
      "id": "mind/zip",
      "config": {
        "filename": "output-zipped.pdf"
      }
    }
  ]
}
```
