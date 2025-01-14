# dotfiles

Dotfiles via [(Tuckr)https://github.com/RaphGL/Tuckr], the super powered GNU Stow replacement

To my future self:
Simply use the `tuckr` command inside the `.dotfiles` folder to create symlinks with the configuration you need.

Usage

```sh
tuckr add \* # adds all dotfiles to the system
tuckr add \* -e alacritty # adds all dotfiles except alacritty
tuckr add alacritty fish # adds the alacritty and fish dotfiles only
tuckr set \* # adds all the dotfiles and runs their hooks (scripts)
tuckr rm \* # removes all dotfiles from your system
```

How it works?
Tuckr works with no configuration, this is achieved by making some assumptions about the structure of your dotfiles directory. Every Tuckr dotfiles directory should have the following structure:

```sh
dotfiles
├── Configs # Dotfiles go here
├── Secrets # Encrypted files go here
└── Hooks # Setup scripts go here
```

## Alacritty

A standard configuration for Alacritty. Note that `fonts.toml` uses `JetBrains Mono`.

## Visual Studio Code (Code)

A general configuration for VS Code. Aims at the Catppuccin and Sweet Dracula colour theme with some modifications. This section is constantly changing according to needs.

## Color-Schemes

Some colour schemes for KDE Plasma. Mostly, these are custom colour schemes. Some feature slight changes like the Catppuccin schemes, and others are completely from scratch like Darkly.

## Corectrl

Gaming profiles: Automatically applies overlcock/undervolting and a custom cooling curve for the RX 5700 XT.

## DeaDBeef

A simple configuration of DeaDBeeF to get a complete interface (inspired by iTunes).

## Fish

General Fish configuration with some useful aliases. In full development because I haven't gone deep enough into Fish yet.

## Helix Editor

Alternative to Vim and Neovim written in Rust. I don't have enough time to configure Neovim or get interested in how it works and what plug-ins/extensions I need. Helix works OOTB.

## MangoHud

Some configurations to show metrics in video games with enough design to not be annoying. Also, I based the colour scheme on Dracula.

## Mozilla-Startpage

My home page. It does not use personal information or specific links, so anyone can use it.

## MPV

MPV configuration. Anime-shaders and fidelityfx-shaders are used in addition to thumbast, sponsorblock and ModernX for the interface.
Some plug-ins are focused on AMD GPUs. Although the configuration still works for me, I suspect I need to update it.

| Short-cut | Shaders |
|-----:|-----------|
|CTRL+1|Disable|
|CTRL+2|Cine|
|CTRL+3|Anime (1080p)|
|CTRL+4|Anime (720p)|
