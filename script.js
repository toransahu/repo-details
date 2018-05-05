/*
 * scrip.js
 * Copyright (C) 2018 Toran Sahu <toran.sahu@yahoo.com>
 *
 * Distributed under terms of the Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved license.
 */
$(document).ready(function() {
    $.ajax({
        url: 'https://api.github.com/users/toransahu/repos',
        type: 'GET',
        success: function(res) {
            console.log(res);
            var data = res;
            for (var i = 0; i < data.length; i++) {
                var size = data[i].size;
                var unit = ' KB';
                if (data[i].size >= 1024) {
                    size = size / 1024;
                    unit = ' MB';
                }
                console.log(data[i].name, size + unit);

                $('.table-body').append(
                    `<tr>
                      <td>` + data[i].name + `</td>
                      <td>` + size + unit + `</td>
                     </tr>`
                );
            }
        },
        fail: function(err) {
            console.log(err);
        }
    });
});