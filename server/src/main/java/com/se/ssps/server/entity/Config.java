package com.se.ssps.server.entity;

import java.util.List;
import lombok.*;

import com.se.ssps.server.entity.configuration.FileType;

@Getter
@Setter
@NoArgsConstructor
public class Config {
    private List<FileType> fileTypeList;

    private Double maxFileSize;

    private Integer pageUnitPrice;
}
