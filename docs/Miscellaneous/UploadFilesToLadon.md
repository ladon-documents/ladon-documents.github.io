# Upload local files to Ladon

By using our [Ladon API](https://ladon.org/doc/ladon). In most cases it's very handy to write a little bash script which is doing the job for your.

## PUT Example with curl

```bash
put_binary() {
  curl -X 'PUT' \
  "https://$url/admin/api/rest/v1/content/buckets/_ui/documents?key=YOUR_KEY%2F$1" \
  -u username:password \
  -H 'accept: application/json' \
  -H 'Content-Type: application/octet-stream' \
  --data-binary "@$2"
}

url=${3:-ladon}
put_binary index.html index.html
``` 

**Tipp:** If you wish to upload to your local instance, running on your pi in a non secure enviroment change htts to http and add a `8080` port to your url like so

```bash
put_binary index.html index.html ladon:8080
```

---

- [See full uploader.sh script example](https://vcs.mind-consulting.de/projects/MIN/repos/ladon-static-pages/browse/task-manager/uploader.sh)