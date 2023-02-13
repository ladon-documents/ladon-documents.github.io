# Dynamic Json Document Rest API

Json documents can easily be created, read and deleted via the standard document rest API

![Get put delete](assets/getputdelete.png)

For example, to create a new json document, just call the PUT endpoint with a json body

![Put](assets/putjson.png)

### Dynamic Json List API

A special endpoint is the GET on jsonlist 

![List](assets/listrequest.png)

With "bucket" and "prefix" you can specify a folder with json files. The content of all files in this folder 
and all subfolders is then returned as a json array.

![Response](assets/response.png)

