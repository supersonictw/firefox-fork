
// i32.wast:3
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x01\x7f\x60\x01\x7f\x01\x7f\x03\x9e\x80\x80\x80\x00\x1d\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07\xc5\x81\x80\x80\x00\x1d\x03\x61\x64\x64\x00\x00\x03\x73\x75\x62\x00\x01\x03\x6d\x75\x6c\x00\x02\x05\x64\x69\x76\x5f\x73\x00\x03\x05\x64\x69\x76\x5f\x75\x00\x04\x05\x72\x65\x6d\x5f\x73\x00\x05\x05\x72\x65\x6d\x5f\x75\x00\x06\x03\x61\x6e\x64\x00\x07\x02\x6f\x72\x00\x08\x03\x78\x6f\x72\x00\x09\x03\x73\x68\x6c\x00\x0a\x05\x73\x68\x72\x5f\x73\x00\x0b\x05\x73\x68\x72\x5f\x75\x00\x0c\x04\x72\x6f\x74\x6c\x00\x0d\x04\x72\x6f\x74\x72\x00\x0e\x03\x63\x6c\x7a\x00\x0f\x03\x63\x74\x7a\x00\x10\x06\x70\x6f\x70\x63\x6e\x74\x00\x11\x03\x65\x71\x7a\x00\x12\x02\x65\x71\x00\x13\x02\x6e\x65\x00\x14\x04\x6c\x74\x5f\x73\x00\x15\x04\x6c\x74\x5f\x75\x00\x16\x04\x6c\x65\x5f\x73\x00\x17\x04\x6c\x65\x5f\x75\x00\x18\x04\x67\x74\x5f\x73\x00\x19\x04\x67\x74\x5f\x75\x00\x1a\x04\x67\x65\x5f\x73\x00\x1b\x04\x67\x65\x5f\x75\x00\x1c\x0a\xd5\x82\x80\x80\x00\x1d\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6a\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x71\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x72\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x73\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x74\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x75\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x76\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x77\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x78\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x67\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x68\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x69\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x45\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x46\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x47\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x48\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x49\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4a\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\x4f\x0b");

// i32.wast:35
assert_return(() => call($1, "add", [1, 1]), 2);

// i32.wast:36
assert_return(() => call($1, "add", [1, 0]), 1);

// i32.wast:37
assert_return(() => call($1, "add", [-1, -1]), -2);

// i32.wast:38
assert_return(() => call($1, "add", [-1, 1]), 0);

// i32.wast:39
assert_return(() => call($1, "add", [2_147_483_647, 1]), -2_147_483_648);

// i32.wast:40
assert_return(() => call($1, "add", [-2_147_483_648, -1]), 2_147_483_647);

// i32.wast:41
assert_return(() => call($1, "add", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:42
assert_return(() => call($1, "add", [1_073_741_823, 1]), 1_073_741_824);

// i32.wast:44
assert_return(() => call($1, "sub", [1, 1]), 0);

// i32.wast:45
assert_return(() => call($1, "sub", [1, 0]), 1);

// i32.wast:46
assert_return(() => call($1, "sub", [-1, -1]), 0);

// i32.wast:47
assert_return(() => call($1, "sub", [2_147_483_647, -1]), -2_147_483_648);

// i32.wast:48
assert_return(() => call($1, "sub", [-2_147_483_648, 1]), 2_147_483_647);

// i32.wast:49
assert_return(() => call($1, "sub", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:50
assert_return(() => call($1, "sub", [1_073_741_823, -1]), 1_073_741_824);

// i32.wast:52
assert_return(() => call($1, "mul", [1, 1]), 1);

// i32.wast:53
assert_return(() => call($1, "mul", [1, 0]), 0);

// i32.wast:54
assert_return(() => call($1, "mul", [-1, -1]), 1);

// i32.wast:55
assert_return(() => call($1, "mul", [268_435_456, 4_096]), 0);

// i32.wast:56
assert_return(() => call($1, "mul", [-2_147_483_648, 0]), 0);

// i32.wast:57
assert_return(() => call($1, "mul", [-2_147_483_648, -1]), -2_147_483_648);

// i32.wast:58
assert_return(() => call($1, "mul", [2_147_483_647, -1]), -2_147_483_647);

// i32.wast:59
assert_return(() => call($1, "mul", [19_088_743, 1_985_229_328]), 898_528_368);

// i32.wast:60
assert_return(() => call($1, "mul", [2_147_483_647, 2_147_483_647]), 1);

// i32.wast:62
assert_trap(() => call($1, "div_s", [1, 0]));

// i32.wast:63
assert_trap(() => call($1, "div_s", [0, 0]));

// i32.wast:64
assert_trap(() => call($1, "div_s", [-2_147_483_648, -1]));

// i32.wast:65
assert_return(() => call($1, "div_s", [1, 1]), 1);

// i32.wast:66
assert_return(() => call($1, "div_s", [0, 1]), 0);

// i32.wast:67
assert_return(() => call($1, "div_s", [0, -1]), 0);

// i32.wast:68
assert_return(() => call($1, "div_s", [-1, -1]), 1);

// i32.wast:69
assert_return(() => call($1, "div_s", [-2_147_483_648, 2]), -1_073_741_824);

// i32.wast:70
assert_return(() => call($1, "div_s", [-2_147_483_647, 1_000]), -2_147_483);

// i32.wast:71
assert_return(() => call($1, "div_s", [5, 2]), 2);

// i32.wast:72
assert_return(() => call($1, "div_s", [-5, 2]), -2);

// i32.wast:73
assert_return(() => call($1, "div_s", [5, -2]), -2);

// i32.wast:74
assert_return(() => call($1, "div_s", [-5, -2]), 2);

// i32.wast:75
assert_return(() => call($1, "div_s", [7, 3]), 2);

// i32.wast:76
assert_return(() => call($1, "div_s", [-7, 3]), -2);

// i32.wast:77
assert_return(() => call($1, "div_s", [7, -3]), -2);

// i32.wast:78
assert_return(() => call($1, "div_s", [-7, -3]), 2);

// i32.wast:79
assert_return(() => call($1, "div_s", [11, 5]), 2);

// i32.wast:80
assert_return(() => call($1, "div_s", [17, 7]), 2);

// i32.wast:82
assert_trap(() => call($1, "div_u", [1, 0]));

// i32.wast:83
assert_trap(() => call($1, "div_u", [0, 0]));

// i32.wast:84
assert_return(() => call($1, "div_u", [1, 1]), 1);

// i32.wast:85
assert_return(() => call($1, "div_u", [0, 1]), 0);

// i32.wast:86
assert_return(() => call($1, "div_u", [-1, -1]), 1);

// i32.wast:87
assert_return(() => call($1, "div_u", [-2_147_483_648, -1]), 0);

// i32.wast:88
assert_return(() => call($1, "div_u", [-2_147_483_648, 2]), 1_073_741_824);

// i32.wast:89
assert_return(() => call($1, "div_u", [-1_880_092_688, 65_537]), 36_847);

// i32.wast:90
assert_return(() => call($1, "div_u", [-2_147_483_647, 1_000]), 2_147_483);

// i32.wast:91
assert_return(() => call($1, "div_u", [5, 2]), 2);

// i32.wast:92
assert_return(() => call($1, "div_u", [-5, 2]), 2_147_483_645);

// i32.wast:93
assert_return(() => call($1, "div_u", [5, -2]), 0);

// i32.wast:94
assert_return(() => call($1, "div_u", [-5, -2]), 0);

// i32.wast:95
assert_return(() => call($1, "div_u", [7, 3]), 2);

// i32.wast:96
assert_return(() => call($1, "div_u", [11, 5]), 2);

// i32.wast:97
assert_return(() => call($1, "div_u", [17, 7]), 2);

// i32.wast:99
assert_trap(() => call($1, "rem_s", [1, 0]));

// i32.wast:100
assert_trap(() => call($1, "rem_s", [0, 0]));

// i32.wast:101
assert_return(() => call($1, "rem_s", [2_147_483_647, -1]), 0);

// i32.wast:102
assert_return(() => call($1, "rem_s", [1, 1]), 0);

// i32.wast:103
assert_return(() => call($1, "rem_s", [0, 1]), 0);

// i32.wast:104
assert_return(() => call($1, "rem_s", [0, -1]), 0);

// i32.wast:105
assert_return(() => call($1, "rem_s", [-1, -1]), 0);

// i32.wast:106
assert_return(() => call($1, "rem_s", [-2_147_483_648, -1]), 0);

// i32.wast:107
assert_return(() => call($1, "rem_s", [-2_147_483_648, 2]), 0);

// i32.wast:108
assert_return(() => call($1, "rem_s", [-2_147_483_647, 1_000]), -647);

// i32.wast:109
assert_return(() => call($1, "rem_s", [5, 2]), 1);

// i32.wast:110
assert_return(() => call($1, "rem_s", [-5, 2]), -1);

// i32.wast:111
assert_return(() => call($1, "rem_s", [5, -2]), 1);

// i32.wast:112
assert_return(() => call($1, "rem_s", [-5, -2]), -1);

// i32.wast:113
assert_return(() => call($1, "rem_s", [7, 3]), 1);

// i32.wast:114
assert_return(() => call($1, "rem_s", [-7, 3]), -1);

// i32.wast:115
assert_return(() => call($1, "rem_s", [7, -3]), 1);

// i32.wast:116
assert_return(() => call($1, "rem_s", [-7, -3]), -1);

// i32.wast:117
assert_return(() => call($1, "rem_s", [11, 5]), 1);

// i32.wast:118
assert_return(() => call($1, "rem_s", [17, 7]), 3);

// i32.wast:120
assert_trap(() => call($1, "rem_u", [1, 0]));

// i32.wast:121
assert_trap(() => call($1, "rem_u", [0, 0]));

// i32.wast:122
assert_return(() => call($1, "rem_u", [1, 1]), 0);

// i32.wast:123
assert_return(() => call($1, "rem_u", [0, 1]), 0);

// i32.wast:124
assert_return(() => call($1, "rem_u", [-1, -1]), 0);

// i32.wast:125
assert_return(() => call($1, "rem_u", [-2_147_483_648, -1]), -2_147_483_648);

// i32.wast:126
assert_return(() => call($1, "rem_u", [-2_147_483_648, 2]), 0);

// i32.wast:127
assert_return(() => call($1, "rem_u", [-1_880_092_688, 65_537]), 32_769);

// i32.wast:128
assert_return(() => call($1, "rem_u", [-2_147_483_647, 1_000]), 649);

// i32.wast:129
assert_return(() => call($1, "rem_u", [5, 2]), 1);

// i32.wast:130
assert_return(() => call($1, "rem_u", [-5, 2]), 1);

// i32.wast:131
assert_return(() => call($1, "rem_u", [5, -2]), 5);

// i32.wast:132
assert_return(() => call($1, "rem_u", [-5, -2]), -5);

// i32.wast:133
assert_return(() => call($1, "rem_u", [7, 3]), 1);

// i32.wast:134
assert_return(() => call($1, "rem_u", [11, 5]), 1);

// i32.wast:135
assert_return(() => call($1, "rem_u", [17, 7]), 3);

// i32.wast:137
assert_return(() => call($1, "and", [1, 0]), 0);

// i32.wast:138
assert_return(() => call($1, "and", [0, 1]), 0);

// i32.wast:139
assert_return(() => call($1, "and", [1, 1]), 1);

// i32.wast:140
assert_return(() => call($1, "and", [0, 0]), 0);

// i32.wast:141
assert_return(() => call($1, "and", [2_147_483_647, -2_147_483_648]), 0);

// i32.wast:142
assert_return(() => call($1, "and", [2_147_483_647, -1]), 2_147_483_647);

// i32.wast:143
assert_return(() => call($1, "and", [-252_641_281, -3_856]), -252_645_136);

// i32.wast:144
assert_return(() => call($1, "and", [-1, -1]), -1);

// i32.wast:146
assert_return(() => call($1, "or", [1, 0]), 1);

// i32.wast:147
assert_return(() => call($1, "or", [0, 1]), 1);

// i32.wast:148
assert_return(() => call($1, "or", [1, 1]), 1);

// i32.wast:149
assert_return(() => call($1, "or", [0, 0]), 0);

// i32.wast:150
assert_return(() => call($1, "or", [2_147_483_647, -2_147_483_648]), -1);

// i32.wast:151
assert_return(() => call($1, "or", [-2_147_483_648, 0]), -2_147_483_648);

// i32.wast:152
assert_return(() => call($1, "or", [-252_641_281, -3_856]), -1);

// i32.wast:153
assert_return(() => call($1, "or", [-1, -1]), -1);

// i32.wast:155
assert_return(() => call($1, "xor", [1, 0]), 1);

// i32.wast:156
assert_return(() => call($1, "xor", [0, 1]), 1);

// i32.wast:157
assert_return(() => call($1, "xor", [1, 1]), 0);

// i32.wast:158
assert_return(() => call($1, "xor", [0, 0]), 0);

// i32.wast:159
assert_return(() => call($1, "xor", [2_147_483_647, -2_147_483_648]), -1);

// i32.wast:160
assert_return(() => call($1, "xor", [-2_147_483_648, 0]), -2_147_483_648);

// i32.wast:161
assert_return(() => call($1, "xor", [-1, -2_147_483_648]), 2_147_483_647);

// i32.wast:162
assert_return(() => call($1, "xor", [-1, 2_147_483_647]), -2_147_483_648);

// i32.wast:163
assert_return(() => call($1, "xor", [-252_641_281, -3_856]), 252_645_135);

// i32.wast:164
assert_return(() => call($1, "xor", [-1, -1]), 0);

// i32.wast:166
assert_return(() => call($1, "shl", [1, 1]), 2);

// i32.wast:167
assert_return(() => call($1, "shl", [1, 0]), 1);

// i32.wast:168
assert_return(() => call($1, "shl", [2_147_483_647, 1]), -2);

// i32.wast:169
assert_return(() => call($1, "shl", [-1, 1]), -2);

// i32.wast:170
assert_return(() => call($1, "shl", [-2_147_483_648, 1]), 0);

// i32.wast:171
assert_return(() => call($1, "shl", [1_073_741_824, 1]), -2_147_483_648);

// i32.wast:172
assert_return(() => call($1, "shl", [1, 31]), -2_147_483_648);

// i32.wast:173
assert_return(() => call($1, "shl", [1, 32]), 1);

// i32.wast:174
assert_return(() => call($1, "shl", [1, 33]), 2);

// i32.wast:175
assert_return(() => call($1, "shl", [1, -1]), -2_147_483_648);

// i32.wast:176
assert_return(() => call($1, "shl", [1, 2_147_483_647]), -2_147_483_648);

// i32.wast:178
assert_return(() => call($1, "shr_s", [1, 1]), 0);

// i32.wast:179
assert_return(() => call($1, "shr_s", [1, 0]), 1);

// i32.wast:180
assert_return(() => call($1, "shr_s", [-1, 1]), -1);

// i32.wast:181
assert_return(() => call($1, "shr_s", [2_147_483_647, 1]), 1_073_741_823);

// i32.wast:182
assert_return(() => call($1, "shr_s", [-2_147_483_648, 1]), -1_073_741_824);

// i32.wast:183
assert_return(() => call($1, "shr_s", [1_073_741_824, 1]), 536_870_912);

// i32.wast:184
assert_return(() => call($1, "shr_s", [1, 32]), 1);

// i32.wast:185
assert_return(() => call($1, "shr_s", [1, 33]), 0);

// i32.wast:186
assert_return(() => call($1, "shr_s", [1, -1]), 0);

// i32.wast:187
assert_return(() => call($1, "shr_s", [1, 2_147_483_647]), 0);

// i32.wast:188
assert_return(() => call($1, "shr_s", [1, -2_147_483_648]), 1);

// i32.wast:189
assert_return(() => call($1, "shr_s", [-2_147_483_648, 31]), -1);

// i32.wast:190
assert_return(() => call($1, "shr_s", [-1, 32]), -1);

// i32.wast:191
assert_return(() => call($1, "shr_s", [-1, 33]), -1);

// i32.wast:192
assert_return(() => call($1, "shr_s", [-1, -1]), -1);

// i32.wast:193
assert_return(() => call($1, "shr_s", [-1, 2_147_483_647]), -1);

// i32.wast:194
assert_return(() => call($1, "shr_s", [-1, -2_147_483_648]), -1);

// i32.wast:196
assert_return(() => call($1, "shr_u", [1, 1]), 0);

// i32.wast:197
assert_return(() => call($1, "shr_u", [1, 0]), 1);

// i32.wast:198
assert_return(() => call($1, "shr_u", [-1, 1]), 2_147_483_647);

// i32.wast:199
assert_return(() => call($1, "shr_u", [2_147_483_647, 1]), 1_073_741_823);

// i32.wast:200
assert_return(() => call($1, "shr_u", [-2_147_483_648, 1]), 1_073_741_824);

// i32.wast:201
assert_return(() => call($1, "shr_u", [1_073_741_824, 1]), 536_870_912);

// i32.wast:202
assert_return(() => call($1, "shr_u", [1, 32]), 1);

// i32.wast:203
assert_return(() => call($1, "shr_u", [1, 33]), 0);

// i32.wast:204
assert_return(() => call($1, "shr_u", [1, -1]), 0);

// i32.wast:205
assert_return(() => call($1, "shr_u", [1, 2_147_483_647]), 0);

// i32.wast:206
assert_return(() => call($1, "shr_u", [1, -2_147_483_648]), 1);

// i32.wast:207
assert_return(() => call($1, "shr_u", [-2_147_483_648, 31]), 1);

// i32.wast:208
assert_return(() => call($1, "shr_u", [-1, 32]), -1);

// i32.wast:209
assert_return(() => call($1, "shr_u", [-1, 33]), 2_147_483_647);

// i32.wast:210
assert_return(() => call($1, "shr_u", [-1, -1]), 1);

// i32.wast:211
assert_return(() => call($1, "shr_u", [-1, 2_147_483_647]), 1);

// i32.wast:212
assert_return(() => call($1, "shr_u", [-1, -2_147_483_648]), -1);

// i32.wast:214
assert_return(() => call($1, "rotl", [1, 1]), 2);

// i32.wast:215
assert_return(() => call($1, "rotl", [1, 0]), 1);

// i32.wast:216
assert_return(() => call($1, "rotl", [-1, 1]), -1);

// i32.wast:217
assert_return(() => call($1, "rotl", [1, 32]), 1);

// i32.wast:218
assert_return(() => call($1, "rotl", [-1_412_589_450, 1]), 1_469_788_397);

// i32.wast:219
assert_return(() => call($1, "rotl", [-33_498_112, 4]), -535_969_777);

// i32.wast:220
assert_return(() => call($1, "rotl", [-1_329_474_845, 5]), 406_477_942);

// i32.wast:221
assert_return(() => call($1, "rotl", [32_768, 37]), 1_048_576);

// i32.wast:222
assert_return(() => call($1, "rotl", [-1_329_474_845, 65_285]), 406_477_942);

// i32.wast:223
assert_return(() => call($1, "rotl", [1_989_852_383, -19]), 1_469_837_011);

// i32.wast:224
assert_return(() => call($1, "rotl", [1_989_852_383, -2_147_483_635]), 1_469_837_011);

// i32.wast:225
assert_return(() => call($1, "rotl", [1, 31]), -2_147_483_648);

// i32.wast:226
assert_return(() => call($1, "rotl", [-2_147_483_648, 1]), 1);

// i32.wast:228
assert_return(() => call($1, "rotr", [1, 1]), -2_147_483_648);

// i32.wast:229
assert_return(() => call($1, "rotr", [1, 0]), 1);

// i32.wast:230
assert_return(() => call($1, "rotr", [-1, 1]), -1);

// i32.wast:231
assert_return(() => call($1, "rotr", [1, 32]), 1);

// i32.wast:232
assert_return(() => call($1, "rotr", [-16_724_992, 1]), 2_139_121_152);

// i32.wast:233
assert_return(() => call($1, "rotr", [524_288, 4]), 32_768);

// i32.wast:234
assert_return(() => call($1, "rotr", [-1_329_474_845, 5]), 495_324_823);

// i32.wast:235
assert_return(() => call($1, "rotr", [32_768, 37]), 1_024);

// i32.wast:236
assert_return(() => call($1, "rotr", [-1_329_474_845, 65_285]), 495_324_823);

// i32.wast:237
assert_return(() => call($1, "rotr", [1_989_852_383, -19]), -419_711_787);

// i32.wast:238
assert_return(() => call($1, "rotr", [1_989_852_383, -2_147_483_635]), -419_711_787);

// i32.wast:239
assert_return(() => call($1, "rotr", [1, 31]), 2);

// i32.wast:240
assert_return(() => call($1, "rotr", [-2_147_483_648, 31]), 1);

// i32.wast:242
assert_return(() => call($1, "clz", [-1]), 0);

// i32.wast:243
assert_return(() => call($1, "clz", [0]), 32);

// i32.wast:244
assert_return(() => call($1, "clz", [32_768]), 16);

// i32.wast:245
assert_return(() => call($1, "clz", [255]), 24);

// i32.wast:246
assert_return(() => call($1, "clz", [-2_147_483_648]), 0);

// i32.wast:247
assert_return(() => call($1, "clz", [1]), 31);

// i32.wast:248
assert_return(() => call($1, "clz", [2]), 30);

// i32.wast:249
assert_return(() => call($1, "clz", [2_147_483_647]), 1);

// i32.wast:251
assert_return(() => call($1, "ctz", [-1]), 0);

// i32.wast:252
assert_return(() => call($1, "ctz", [0]), 32);

// i32.wast:253
assert_return(() => call($1, "ctz", [32_768]), 15);

// i32.wast:254
assert_return(() => call($1, "ctz", [65_536]), 16);

// i32.wast:255
assert_return(() => call($1, "ctz", [-2_147_483_648]), 31);

// i32.wast:256
assert_return(() => call($1, "ctz", [2_147_483_647]), 0);

// i32.wast:258
assert_return(() => call($1, "popcnt", [-1]), 32);

// i32.wast:259
assert_return(() => call($1, "popcnt", [0]), 0);

// i32.wast:260
assert_return(() => call($1, "popcnt", [32_768]), 1);

// i32.wast:261
assert_return(() => call($1, "popcnt", [-2_147_450_880]), 2);

// i32.wast:262
assert_return(() => call($1, "popcnt", [2_147_483_647]), 31);

// i32.wast:263
assert_return(() => call($1, "popcnt", [-1_431_655_766]), 16);

// i32.wast:264
assert_return(() => call($1, "popcnt", [1_431_655_765]), 16);

// i32.wast:265
assert_return(() => call($1, "popcnt", [-559_038_737]), 24);

// i32.wast:267
assert_return(() => call($1, "eqz", [0]), 1);

// i32.wast:268
assert_return(() => call($1, "eqz", [1]), 0);

// i32.wast:269
assert_return(() => call($1, "eqz", [-2_147_483_648]), 0);

// i32.wast:270
assert_return(() => call($1, "eqz", [2_147_483_647]), 0);

// i32.wast:271
assert_return(() => call($1, "eqz", [-1]), 0);

// i32.wast:273
assert_return(() => call($1, "eq", [0, 0]), 1);

// i32.wast:274
assert_return(() => call($1, "eq", [1, 1]), 1);

// i32.wast:275
assert_return(() => call($1, "eq", [-1, 1]), 0);

// i32.wast:276
assert_return(() => call($1, "eq", [-2_147_483_648, -2_147_483_648]), 1);

// i32.wast:277
assert_return(() => call($1, "eq", [2_147_483_647, 2_147_483_647]), 1);

// i32.wast:278
assert_return(() => call($1, "eq", [-1, -1]), 1);

// i32.wast:279
assert_return(() => call($1, "eq", [1, 0]), 0);

// i32.wast:280
assert_return(() => call($1, "eq", [0, 1]), 0);

// i32.wast:281
assert_return(() => call($1, "eq", [-2_147_483_648, 0]), 0);

// i32.wast:282
assert_return(() => call($1, "eq", [0, -2_147_483_648]), 0);

// i32.wast:283
assert_return(() => call($1, "eq", [-2_147_483_648, -1]), 0);

// i32.wast:284
assert_return(() => call($1, "eq", [-1, -2_147_483_648]), 0);

// i32.wast:285
assert_return(() => call($1, "eq", [-2_147_483_648, 2_147_483_647]), 0);

// i32.wast:286
assert_return(() => call($1, "eq", [2_147_483_647, -2_147_483_648]), 0);

// i32.wast:288
assert_return(() => call($1, "ne", [0, 0]), 0);

// i32.wast:289
assert_return(() => call($1, "ne", [1, 1]), 0);

// i32.wast:290
assert_return(() => call($1, "ne", [-1, 1]), 1);

// i32.wast:291
assert_return(() => call($1, "ne", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:292
assert_return(() => call($1, "ne", [2_147_483_647, 2_147_483_647]), 0);

// i32.wast:293
assert_return(() => call($1, "ne", [-1, -1]), 0);

// i32.wast:294
assert_return(() => call($1, "ne", [1, 0]), 1);

// i32.wast:295
assert_return(() => call($1, "ne", [0, 1]), 1);

// i32.wast:296
assert_return(() => call($1, "ne", [-2_147_483_648, 0]), 1);

// i32.wast:297
assert_return(() => call($1, "ne", [0, -2_147_483_648]), 1);

// i32.wast:298
assert_return(() => call($1, "ne", [-2_147_483_648, -1]), 1);

// i32.wast:299
assert_return(() => call($1, "ne", [-1, -2_147_483_648]), 1);

// i32.wast:300
assert_return(() => call($1, "ne", [-2_147_483_648, 2_147_483_647]), 1);

// i32.wast:301
assert_return(() => call($1, "ne", [2_147_483_647, -2_147_483_648]), 1);

// i32.wast:303
assert_return(() => call($1, "lt_s", [0, 0]), 0);

// i32.wast:304
assert_return(() => call($1, "lt_s", [1, 1]), 0);

// i32.wast:305
assert_return(() => call($1, "lt_s", [-1, 1]), 1);

// i32.wast:306
assert_return(() => call($1, "lt_s", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:307
assert_return(() => call($1, "lt_s", [2_147_483_647, 2_147_483_647]), 0);

// i32.wast:308
assert_return(() => call($1, "lt_s", [-1, -1]), 0);

// i32.wast:309
assert_return(() => call($1, "lt_s", [1, 0]), 0);

// i32.wast:310
assert_return(() => call($1, "lt_s", [0, 1]), 1);

// i32.wast:311
assert_return(() => call($1, "lt_s", [-2_147_483_648, 0]), 1);

// i32.wast:312
assert_return(() => call($1, "lt_s", [0, -2_147_483_648]), 0);

// i32.wast:313
assert_return(() => call($1, "lt_s", [-2_147_483_648, -1]), 1);

// i32.wast:314
assert_return(() => call($1, "lt_s", [-1, -2_147_483_648]), 0);

// i32.wast:315
assert_return(() => call($1, "lt_s", [-2_147_483_648, 2_147_483_647]), 1);

// i32.wast:316
assert_return(() => call($1, "lt_s", [2_147_483_647, -2_147_483_648]), 0);

// i32.wast:318
assert_return(() => call($1, "lt_u", [0, 0]), 0);

// i32.wast:319
assert_return(() => call($1, "lt_u", [1, 1]), 0);

// i32.wast:320
assert_return(() => call($1, "lt_u", [-1, 1]), 0);

// i32.wast:321
assert_return(() => call($1, "lt_u", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:322
assert_return(() => call($1, "lt_u", [2_147_483_647, 2_147_483_647]), 0);

// i32.wast:323
assert_return(() => call($1, "lt_u", [-1, -1]), 0);

// i32.wast:324
assert_return(() => call($1, "lt_u", [1, 0]), 0);

// i32.wast:325
assert_return(() => call($1, "lt_u", [0, 1]), 1);

// i32.wast:326
assert_return(() => call($1, "lt_u", [-2_147_483_648, 0]), 0);

// i32.wast:327
assert_return(() => call($1, "lt_u", [0, -2_147_483_648]), 1);

// i32.wast:328
assert_return(() => call($1, "lt_u", [-2_147_483_648, -1]), 1);

// i32.wast:329
assert_return(() => call($1, "lt_u", [-1, -2_147_483_648]), 0);

// i32.wast:330
assert_return(() => call($1, "lt_u", [-2_147_483_648, 2_147_483_647]), 0);

// i32.wast:331
assert_return(() => call($1, "lt_u", [2_147_483_647, -2_147_483_648]), 1);

// i32.wast:333
assert_return(() => call($1, "le_s", [0, 0]), 1);

// i32.wast:334
assert_return(() => call($1, "le_s", [1, 1]), 1);

// i32.wast:335
assert_return(() => call($1, "le_s", [-1, 1]), 1);

// i32.wast:336
assert_return(() => call($1, "le_s", [-2_147_483_648, -2_147_483_648]), 1);

// i32.wast:337
assert_return(() => call($1, "le_s", [2_147_483_647, 2_147_483_647]), 1);

// i32.wast:338
assert_return(() => call($1, "le_s", [-1, -1]), 1);

// i32.wast:339
assert_return(() => call($1, "le_s", [1, 0]), 0);

// i32.wast:340
assert_return(() => call($1, "le_s", [0, 1]), 1);

// i32.wast:341
assert_return(() => call($1, "le_s", [-2_147_483_648, 0]), 1);

// i32.wast:342
assert_return(() => call($1, "le_s", [0, -2_147_483_648]), 0);

// i32.wast:343
assert_return(() => call($1, "le_s", [-2_147_483_648, -1]), 1);

// i32.wast:344
assert_return(() => call($1, "le_s", [-1, -2_147_483_648]), 0);

// i32.wast:345
assert_return(() => call($1, "le_s", [-2_147_483_648, 2_147_483_647]), 1);

// i32.wast:346
assert_return(() => call($1, "le_s", [2_147_483_647, -2_147_483_648]), 0);

// i32.wast:348
assert_return(() => call($1, "le_u", [0, 0]), 1);

// i32.wast:349
assert_return(() => call($1, "le_u", [1, 1]), 1);

// i32.wast:350
assert_return(() => call($1, "le_u", [-1, 1]), 0);

// i32.wast:351
assert_return(() => call($1, "le_u", [-2_147_483_648, -2_147_483_648]), 1);

// i32.wast:352
assert_return(() => call($1, "le_u", [2_147_483_647, 2_147_483_647]), 1);

// i32.wast:353
assert_return(() => call($1, "le_u", [-1, -1]), 1);

// i32.wast:354
assert_return(() => call($1, "le_u", [1, 0]), 0);

// i32.wast:355
assert_return(() => call($1, "le_u", [0, 1]), 1);

// i32.wast:356
assert_return(() => call($1, "le_u", [-2_147_483_648, 0]), 0);

// i32.wast:357
assert_return(() => call($1, "le_u", [0, -2_147_483_648]), 1);

// i32.wast:358
assert_return(() => call($1, "le_u", [-2_147_483_648, -1]), 1);

// i32.wast:359
assert_return(() => call($1, "le_u", [-1, -2_147_483_648]), 0);

// i32.wast:360
assert_return(() => call($1, "le_u", [-2_147_483_648, 2_147_483_647]), 0);

// i32.wast:361
assert_return(() => call($1, "le_u", [2_147_483_647, -2_147_483_648]), 1);

// i32.wast:363
assert_return(() => call($1, "gt_s", [0, 0]), 0);

// i32.wast:364
assert_return(() => call($1, "gt_s", [1, 1]), 0);

// i32.wast:365
assert_return(() => call($1, "gt_s", [-1, 1]), 0);

// i32.wast:366
assert_return(() => call($1, "gt_s", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:367
assert_return(() => call($1, "gt_s", [2_147_483_647, 2_147_483_647]), 0);

// i32.wast:368
assert_return(() => call($1, "gt_s", [-1, -1]), 0);

// i32.wast:369
assert_return(() => call($1, "gt_s", [1, 0]), 1);

// i32.wast:370
assert_return(() => call($1, "gt_s", [0, 1]), 0);

// i32.wast:371
assert_return(() => call($1, "gt_s", [-2_147_483_648, 0]), 0);

// i32.wast:372
assert_return(() => call($1, "gt_s", [0, -2_147_483_648]), 1);

// i32.wast:373
assert_return(() => call($1, "gt_s", [-2_147_483_648, -1]), 0);

// i32.wast:374
assert_return(() => call($1, "gt_s", [-1, -2_147_483_648]), 1);

// i32.wast:375
assert_return(() => call($1, "gt_s", [-2_147_483_648, 2_147_483_647]), 0);

// i32.wast:376
assert_return(() => call($1, "gt_s", [2_147_483_647, -2_147_483_648]), 1);

// i32.wast:378
assert_return(() => call($1, "gt_u", [0, 0]), 0);

// i32.wast:379
assert_return(() => call($1, "gt_u", [1, 1]), 0);

// i32.wast:380
assert_return(() => call($1, "gt_u", [-1, 1]), 1);

// i32.wast:381
assert_return(() => call($1, "gt_u", [-2_147_483_648, -2_147_483_648]), 0);

// i32.wast:382
assert_return(() => call($1, "gt_u", [2_147_483_647, 2_147_483_647]), 0);

// i32.wast:383
assert_return(() => call($1, "gt_u", [-1, -1]), 0);

// i32.wast:384
assert_return(() => call($1, "gt_u", [1, 0]), 1);

// i32.wast:385
assert_return(() => call($1, "gt_u", [0, 1]), 0);

// i32.wast:386
assert_return(() => call($1, "gt_u", [-2_147_483_648, 0]), 1);

// i32.wast:387
assert_return(() => call($1, "gt_u", [0, -2_147_483_648]), 0);

// i32.wast:388
assert_return(() => call($1, "gt_u", [-2_147_483_648, -1]), 0);

// i32.wast:389
assert_return(() => call($1, "gt_u", [-1, -2_147_483_648]), 1);

// i32.wast:390
assert_return(() => call($1, "gt_u", [-2_147_483_648, 2_147_483_647]), 1);

// i32.wast:391
assert_return(() => call($1, "gt_u", [2_147_483_647, -2_147_483_648]), 0);

// i32.wast:393
assert_return(() => call($1, "ge_s", [0, 0]), 1);

// i32.wast:394
assert_return(() => call($1, "ge_s", [1, 1]), 1);

// i32.wast:395
assert_return(() => call($1, "ge_s", [-1, 1]), 0);

// i32.wast:396
assert_return(() => call($1, "ge_s", [-2_147_483_648, -2_147_483_648]), 1);

// i32.wast:397
assert_return(() => call($1, "ge_s", [2_147_483_647, 2_147_483_647]), 1);

// i32.wast:398
assert_return(() => call($1, "ge_s", [-1, -1]), 1);

// i32.wast:399
assert_return(() => call($1, "ge_s", [1, 0]), 1);

// i32.wast:400
assert_return(() => call($1, "ge_s", [0, 1]), 0);

// i32.wast:401
assert_return(() => call($1, "ge_s", [-2_147_483_648, 0]), 0);

// i32.wast:402
assert_return(() => call($1, "ge_s", [0, -2_147_483_648]), 1);

// i32.wast:403
assert_return(() => call($1, "ge_s", [-2_147_483_648, -1]), 0);

// i32.wast:404
assert_return(() => call($1, "ge_s", [-1, -2_147_483_648]), 1);

// i32.wast:405
assert_return(() => call($1, "ge_s", [-2_147_483_648, 2_147_483_647]), 0);

// i32.wast:406
assert_return(() => call($1, "ge_s", [2_147_483_647, -2_147_483_648]), 1);

// i32.wast:408
assert_return(() => call($1, "ge_u", [0, 0]), 1);

// i32.wast:409
assert_return(() => call($1, "ge_u", [1, 1]), 1);

// i32.wast:410
assert_return(() => call($1, "ge_u", [-1, 1]), 1);

// i32.wast:411
assert_return(() => call($1, "ge_u", [-2_147_483_648, -2_147_483_648]), 1);

// i32.wast:412
assert_return(() => call($1, "ge_u", [2_147_483_647, 2_147_483_647]), 1);

// i32.wast:413
assert_return(() => call($1, "ge_u", [-1, -1]), 1);

// i32.wast:414
assert_return(() => call($1, "ge_u", [1, 0]), 1);

// i32.wast:415
assert_return(() => call($1, "ge_u", [0, 1]), 0);

// i32.wast:416
assert_return(() => call($1, "ge_u", [-2_147_483_648, 0]), 1);

// i32.wast:417
assert_return(() => call($1, "ge_u", [0, -2_147_483_648]), 0);

// i32.wast:418
assert_return(() => call($1, "ge_u", [-2_147_483_648, -1]), 0);

// i32.wast:419
assert_return(() => call($1, "ge_u", [-1, -2_147_483_648]), 1);

// i32.wast:420
assert_return(() => call($1, "ge_u", [-2_147_483_648, 2_147_483_647]), 1);

// i32.wast:421
assert_return(() => call($1, "ge_u", [2_147_483_647, -2_147_483_648]), 0);

// i32.wast:424
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x45\x1a\x0b");

// i32.wast:432
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x41\x00\x02\x40\x45\x1a\x0b\x0b");

// i32.wast:441
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x41\x00\x03\x40\x45\x1a\x0b\x0b");

// i32.wast:450
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x41\x00\x04\x40\x45\x1a\x0b\x0b");

// i32.wast:459
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x45\x0b\x1a\x0b");

// i32.wast:468
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x02\x40\x45\x0c\x00\x1a\x0b\x0b");

// i32.wast:477
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x41\x00\x02\x40\x45\x41\x01\x0d\x00\x1a\x0b\x0b");

// i32.wast:486
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x92\x80\x80\x80\x00\x01\x8c\x80\x80\x80\x00\x00\x41\x00\x02\x40\x45\x0e\x00\x00\x1a\x0b\x0b");

// i32.wast:495
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x45\x0f\x1a\x0b");

// i32.wast:503
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x45\x41\x01\x41\x02\x1b\x1a\x0b");

// i32.wast:511
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7f\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x0a\x95\x80\x80\x80\x00\x02\x86\x80\x80\x80\x00\x00\x45\x10\x01\x1a\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b");

// i32.wast:520
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x04\x85\x80\x80\x80\x00\x01\x70\x01\x01\x01\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x00\x0a\x9b\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x8c\x80\x80\x80\x00\x00\x02\x7f\x45\x41\x00\x11\x00\x00\x1a\x0b\x0b");

// i32.wast:536
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x01\x01\x7f\x45\x21\x00\x20\x00\x1a\x0b");

// i32.wast:545
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x01\x01\x7f\x45\x22\x00\x1a\x0b");

// i32.wast:554
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x01\x41\x00\x0b\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x45\x24\x00\x23\x00\x1a\x0b");

// i32.wast:563
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x45\x40\x00\x1a\x0b");

// i32.wast:572
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x45\x28\x02\x00\x1a\x0b");

// i32.wast:581
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x45\x41\x01\x36\x02\x00\x0b");

// i32.wast:591
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x6a\x1a\x0b");

// i32.wast:599
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x00\x6a\x1a\x0b");

// i32.wast:607
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x41\x00\x02\x40\x6a\x1a\x0b\x0b");

// i32.wast:616
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x02\x40\x41\x00\x6a\x1a\x0b\x0b");

// i32.wast:625
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x41\x00\x03\x40\x6a\x1a\x0b\x0b");

// i32.wast:634
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x03\x40\x41\x00\x6a\x1a\x0b\x0b");

// i32.wast:643
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x41\x00\x41\x00\x41\x00\x6a\x04\x40\x1a\x0b\x0b");

// i32.wast:652
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x00\x41\x00\x41\x00\x04\x40\x6a\x05\x1a\x0b\x0b");

// i32.wast:661
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x41\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x6a\x41\x00\x0b\x1a\x1a\x0b");

// i32.wast:671
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x00\x41\x00\x04\x7f\x41\x00\x05\x6a\x0b\x1a\x0b");

// i32.wast:681
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x41\x00\x41\x00\x02\x40\x6a\x0c\x00\x1a\x0b\x0b");

// i32.wast:690
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x41\x00\x02\x40\x41\x00\x6a\x0c\x00\x1a\x0b\x0b");

// i32.wast:699
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x95\x80\x80\x80\x00\x01\x8f\x80\x80\x80\x00\x00\x41\x00\x41\x00\x02\x40\x6a\x41\x01\x0d\x00\x1a\x0b\x0b");

// i32.wast:708
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x95\x80\x80\x80\x00\x01\x8f\x80\x80\x80\x00\x00\x41\x00\x02\x40\x41\x00\x6a\x41\x01\x0d\x00\x1a\x0b\x0b");

// i32.wast:717
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x00\x41\x00\x02\x40\x6a\x0e\x00\x00\x1a\x0b\x0b");

// i32.wast:726
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x41\x00\x02\x40\x41\x00\x6a\x0e\x00\x00\x1a\x0b\x0b");

// i32.wast:735
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x6a\x0f\x1a\x0b");

// i32.wast:743
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x41\x00\x6a\x0f\x1a\x0b");

// i32.wast:751
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x6a\x41\x01\x41\x02\x1b\x1a\x0b");

// i32.wast:759
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x6a\x41\x01\x41\x02\x1b\x1a\x0b");

// i32.wast:767
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7f\x7f\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x0a\x95\x80\x80\x80\x00\x02\x86\x80\x80\x80\x00\x00\x6a\x10\x01\x1a\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b");

// i32.wast:776
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7f\x7f\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x0a\x97\x80\x80\x80\x00\x02\x88\x80\x80\x80\x00\x00\x41\x00\x6a\x10\x01\x1a\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b");

// i32.wast:785
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x04\x85\x80\x80\x80\x00\x01\x70\x01\x01\x01\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x00\x0a\x9b\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x8c\x80\x80\x80\x00\x00\x02\x7f\x6a\x41\x00\x11\x00\x00\x1a\x0b\x0b");

// i32.wast:801
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x00\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x04\x85\x80\x80\x80\x00\x01\x70\x01\x01\x01\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x00\x0a\x9d\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x8e\x80\x80\x80\x00\x00\x02\x7f\x41\x00\x6a\x41\x00\x11\x00\x00\x1a\x0b\x0b");

// i32.wast:817
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x01\x01\x7f\x6a\x21\x00\x20\x00\x1a\x0b");

// i32.wast:826
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x92\x80\x80\x80\x00\x01\x8c\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x6a\x21\x00\x20\x00\x1a\x0b");

// i32.wast:835
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x01\x01\x7f\x6a\x22\x00\x1a\x0b");

// i32.wast:844
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x6a\x22\x00\x1a\x0b");

// i32.wast:853
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x01\x41\x00\x0b\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x6a\x24\x00\x23\x00\x1a\x0b");

// i32.wast:862
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x01\x41\x00\x0b\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x41\x00\x6a\x24\x00\x23\x00\x1a\x0b");

// i32.wast:871
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x6a\x40\x00\x1a\x0b");

// i32.wast:880
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x41\x00\x6a\x40\x00\x1a\x0b");

// i32.wast:889
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x6a\x28\x02\x00\x1a\x0b");

// i32.wast:898
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x41\x00\x6a\x28\x02\x00\x1a\x0b");

// i32.wast:907
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x6a\x41\x01\x36\x02\x00\x0b");

// i32.wast:916
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x41\x01\x6a\x41\x00\x36\x02\x00\x0b");

// i32.wast:929
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x6a\x0b");

// i32.wast:930
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x71\x0b");

// i32.wast:931
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x6d\x0b");

// i32.wast:932
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x6e\x0b");

// i32.wast:933
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x6c\x0b");

// i32.wast:934
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x72\x0b");

// i32.wast:935
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x6f\x0b");

// i32.wast:936
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x70\x0b");

// i32.wast:937
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x77\x0b");

// i32.wast:938
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x78\x0b");

// i32.wast:939
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x74\x0b");

// i32.wast:940
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x75\x0b");

// i32.wast:941
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x76\x0b");

// i32.wast:942
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x6b\x0b");

// i32.wast:943
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x73\x0b");

// i32.wast:944
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x45\x0b");

// i32.wast:945
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x67\x0b");

// i32.wast:946
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x68\x0b");

// i32.wast:947
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x69\x0b");

// i32.wast:948
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x46\x0b");

// i32.wast:949
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x4e\x0b");

// i32.wast:950
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x4f\x0b");

// i32.wast:951
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x4a\x0b");

// i32.wast:952
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x4b\x0b");

// i32.wast:953
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x4c\x0b");

// i32.wast:954
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x4d\x0b");

// i32.wast:955
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x48\x0b");

// i32.wast:956
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x49\x0b");

// i32.wast:957
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\x47\x0b");