# SAITOUR Image Guide

홈페이지 이미지는 `public/images` 폴더에서 관리합니다.

같은 파일명으로 이미지만 교체하면 코드 수정 없이 홈페이지에 반영됩니다.

## 기본 규칙

- 외부 URL을 사용하지 않습니다.
- 이미지는 모두 `public/images` 안에 넣습니다.
- 파일명은 아래 표와 정확히 같아야 합니다.
- 권장 비율은 `16:9`입니다.
- 권장 파일 형식은 `.jpg`입니다.

## Hero 이미지

폴더:

```text
public/images/hero
```

파일:

```text
hero-main.jpg
```

교체 방법:

1. `public/images/hero` 폴더로 이동
2. 기존 `hero-main.jpg` 삭제
3. 새 사진 이름을 `hero-main.jpg`로 변경
4. 붙여넣기
5. 홈페이지 새로고침

끝.

## 대표 서비스 이미지

폴더:

```text
public/images/services
```

파일명:

```text
dmz.jpg
seoul-city.jpg
airport-transfer.jpg
corporate-events.jpg
private-tour.jpg
guide-service.jpg
```

예시:

DMZ 사진을 바꾸려면:

1. `public/images/services` 폴더로 이동
2. 기존 `dmz.jpg` 삭제
3. 새 DMZ 사진 이름을 `dmz.jpg`로 변경
4. 붙여넣기
5. 홈페이지 새로고침

## About 이미지

폴더:

```text
public/images/about
```

파일:

```text
about-main.jpg
```

## Gallery 이미지

폴더:

```text
public/images/gallery
```

파일명:

```text
gallery01.jpg
gallery02.jpg
gallery03.jpg
gallery04.jpg
gallery05.jpg
gallery06.jpg
gallery07.jpg
gallery08.jpg
```

갤러리 사진을 늘릴 때는 개발자에게 `data/images.ts`와 `data/gallery.ts`에 항목 추가를 요청하면 됩니다.

## Fallback Image

이미지가 없거나 깨졌을 때는 아래 기본 이미지가 자동으로 표시됩니다.

```text
public/images/common/fallback.jpg
```

이 파일은 삭제하지 마세요.

## 전체 폴더 구조

```text
public/images
├─ hero
│  └─ hero-main.jpg
├─ services
│  ├─ dmz.jpg
│  ├─ seoul-city.jpg
│  ├─ airport-transfer.jpg
│  ├─ corporate-events.jpg
│  ├─ private-tour.jpg
│  └─ guide-service.jpg
├─ about
│  └─ about-main.jpg
├─ gallery
│  ├─ gallery01.jpg
│  ├─ gallery02.jpg
│  ├─ gallery03.jpg
│  ├─ gallery04.jpg
│  ├─ gallery05.jpg
│  ├─ gallery06.jpg
│  ├─ gallery07.jpg
│  └─ gallery08.jpg
└─ common
   └─ fallback.jpg
```
