source /usr/share/cachyos-fish-config/cachyos-config.fish

# NIM & NIMBLE
set -ga fish_user_paths /home/human/.nimble/bin

# PYTHON
set -gx PATH $HOME/.local/bin $PATH

# EDITOR DE TEXTO EN TERMINAL PREDETERMINADO
export EDITOR='nvim'
export VISUAL='nvim'

# ACCIONES DEL SISTEMA
alias back='z ..'
alias zz='yazi'
alias nv='nvim'
alias zc='rsync -azhP'
alias apagar='shutdown now'
alias reiniciar='shutdown -r now'
alias zclean='paru -c  && paru -Sc'
alias pkglist='paru -Qqe > pkglist.txt'
alias zm='rsync -azhP --remove-source-files'
alias bios='systemctl reboot --firmware-setup'

# ENTORNO VIRTUAL PYTHON
alias envspotdl='. /home/human/.python-env/spotdl-env/bin/activate.fish'

# INIT
zoxide init fish | source
