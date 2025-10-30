# Running in Kiosk

Platform supporting the kiosk mode:
- Linux (both GTK and Qt)
- Windows

To directly run a project in fullscreen, use the `--kiosk` flag.

The project has to be built at least once beforehand through the FullStacked Editor. Then, take note of the project identifier and use it the command line as argument to the `--kiosk` flag.

## Linux

```
fullstacked --kiosk org.fullstacked.demo
```

## Windows

Run directly in a command prompt or from a `.bat` file.

```
start shell:AppsFolder\Charles-PhilippeLepage.FullStackedEditor_yejxxbedrqpcg!App --kiosk org.fullstacked.demo
```