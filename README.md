# dotfiles

Dotfiles via [(Mirage)https://app.radicle.xyz/nodes/ash.radicle.garden/rad:z4FG8oezk7bvVZtLbSvxNqAzA1Z32], the GNU Stow written in Nim.

To my future self:
Simply use the `mirage` command to create symlinks with the configuration you need.

Usage

```sh
# adds the alacritty dotfiles
mirage add alacritty 

# move the alacritty files from ~/.config to your ~/.dotfiles and then, create the symlink
mirage set alacritty
```

How it works?

`mirage` works with no configuration, this is achieved by making some assumptions about the structure of your dotfiles directory. Every `mirage` dotfiles profile should have the following structure:

```sh
~/.dotfiles
└── main          # default profile
    └── alacritty # your configuration files
```

You may find more than one profile. This is useful if you use more than one computer. Example: Desktop and laptop. Both have different hardware, so some dotfile settings will be different.

```sh
~/.dotfiles
├── main          # default profile
│   └── alacritty
└── laptop        # laptop profile
    └── alacritty
```

Learn more: [(Mirage)https://app.radicle.xyz/nodes/ash.radicle.garden/rad:z4FG8oezk7bvVZtLbSvxNqAzA1Z32]
