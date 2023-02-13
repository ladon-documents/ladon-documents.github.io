# Document Data Model

## Cassandra model

### Repositories

Repositories table holds the metadata for repositories ( buckets or containers ). It is used for listing all available repositories only.


| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| repoid       | bucket or repository name                          |
| acl          | unused                                             |
| createdby    | userid of the creator                              |
| creationdate | date and time of creation                          |
| policy       | unused                                             |
| region       | unused                                             |
| versioned    | whether this repository supports versioning or not |

#### Example


| repoid | acl  | createdby | creationdate                    | policy | region | versioned |
| ------ | ---- | --------- | ------------------------------- | ------ | ------ | --------- |
| test   | null | admin     | 2022-06-06 18:37:59.423000+0000 | null   | null   | True      |

### Objects2

Objects2 table holds internal metadata and usermetadata as well as a reference to the content stream of a document. Versioning is also included into this model.


| Name            | Description                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| repoid          | bucket or repository name                                                                                                   |
| versionseriesid | key or path of the document                                                                                                 |
| changetoken     | versionid of the documents version. This is a time based uuid and also can be used as transactionid.                        |
| createdby       | userid of the owner                                                                                                         |
| operation       | PUT or DELETE depending on the operation that created this entry.<br />There is no difference between create or update atm. |
| value           | internal and user metadata                                                                                                  |

#### Example


| repoid | versionseriesid     | changetoken                          | createdby | operation | value                                                                                                                                                                                                                                                                                         |
| ------ | ------------------- | ------------------------------------ | --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| test   | folder1/9994820.pdf | 3e91e900-e9cd-11ec-b598-6deacc2c2ef9 | admin     | PUT       | {"meta":{"content-type":"application/pdf"},"internal":{"ldn-md5":"792181FA5733CF81123AB11EA85273AC","ldn-length":47367,"ldn-streamid":"3e921010-e9cd-11ec-b598-6deacc2c2ef9","ldn-deleted-date":null,"ldn-deleted-by":null,"ldn-created-date":1654982826.905105000,"ldn-created-by":"admin"}} |

### Content

Content table is a reference table which holds all data chunk references that belong to a content stream. 


| Name     | Description                              |
| -------- | ---------------------------------------- |
| repoid   | bucket or repository name                |
| streamid | uuid of the content stream               |
| count    | counter for the different chunks of data |
| chunkid  | hash key of the referenced chunk of data |

#### Example


| repoid | streamid                             | count | chunkid                                                            |
| ------ | ------------------------------------ | ----- | ------------------------------------------------------------------ |
| _ui    | 1f90ba00-a002-11ec-a101-990348f56254 | 0     | 0xfade880e0e2519b4844d017d01a0ad9aa8bce3ec2d844dbeabb56737901bd84f |

### Chunks

Chunk table holds the binary data. 


| chunkid                                                            | ref                                  | content                             |
| ------------------------------------------------------------------ | ------------------------------------ | ----------------------------------- |
| 0xfade880e0e2519b4844d017d01a0ad9aa8bce3ec2d844dbeabb56737901bd84f | 1f90ba00-a002-11ec-a101-990348f56254 | 0x96e6cda76e4f791dd86c991cc6ec0ccfc |

## Rest model

```json
{
    "content-type": "application/octet-stream",
    "created": "2022-10-20T09:23:03",
    "last-modified": "2022-10-20T09:23:03",
    "bucket": "_ui",
    "key": "root/assets/config/config.json",
    "path": "/_ui/root/assets/config/config.json",
    "etag": "75E3BE20D58D43E15D6A8B490D3B400F",
    "metadata": {
      "ldn-plain-length": "466",
      "ldn-md5": "75E3BE20D58D43E15D6A8B490D3B400F"
    },
    "owner": "admin",
    "size": 466,
    "version": "2022-10-20T07:23:03.0336134Z"
  }
```
