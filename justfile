
default:
    just --list

update:
    packwiz update --all

add mod:
    packwiz mr add '{{mod}}'

commit message:
    git add .
    git commit -m '{{message}}'
    git push