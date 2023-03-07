# Update your Ladon instance

Check all available Ladon Versions at https://ladon.org/downloads

## Update your local PI

### Connect and download

```bash
ssh pi@ladon
wget https://ladon.org/downloads/ladon_de_your_version.jar
```

### Backup and setup

```bash
mv ladon.jar ladon.jar.bak
mv ladon_de_your_version.jar ladon.jar
```

### Restart PI

```bash
sudo reboot
```
