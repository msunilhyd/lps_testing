from os import dup


with open('playlists copy.js') as f:
    lines = f.readlines()
    dup_list = []
    for line in lines:
        res = line.strip('\'').split(', ')
        dup_list.append(res[4])
    print(set(x for x in dup_list if dup_list.count(x) > 1))