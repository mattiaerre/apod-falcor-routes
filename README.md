# apod-graphistry-falcor-routes

Astronomy Picture of the Day as a Graphistry Falcor routes

## Demo

```bash
➜  apod-graphistry-falcor-routes git:(master) ✗ yarn
➜  apod-graphistry-falcor-routes git:(master) ✗ cd server
➜  server git:(master) ✗ yarn
➜  server git:(master) ✗ yarn start:dev
```

### Query

```json
[["apod", ["copyright", "date", "explanation", "hdurl", "media_type", "title", "url"]]]
```

### Result

```json
{
  "apod": {
    "explanation": "This storm cloud on Jupiter is almost as large as the Earth.  Known as a white oval, the swirling cloud is a high pressure system equivalent to an Earthly anticyclone. The cloud is one of a \"string of pearls\" ovals south of Jupiter's famous Great Red Spot.  Possibly, the Great Red Spot is just a really large white oval than turned red.  Surrounding clouds show interesting turbulence as they flow around and past the oval.  The featured image was captured on February 2 as NASA's robotic spacecraft Juno made a new pass just above the cloud tops of the Jovian world.  Over the next few years, Juno will continue to orbit and probe Jupiter, determine atmospheric water abundance, and attempt to determine if Jupiter has a solid surface beneath its thick clouds.",
    "title": "A White Oval Cloud on Jupiter from Juno",
    "url": "http://apod.nasa.gov/apod/image/1702/WhiteOval_Juno_960.jpg",
    "date": "2017-02-28",
    "hdurl": "http://apod.nasa.gov/apod/image/1702/WhiteOval_Juno_640.jpg",
    "media_type": "image"
  }
}
```

## Test (w/ coverage)

```bash
➜  apod-graphistry-falcor-routes git:(master) ✗ yarn test -- --coverage
```

## Resources

- [https://github.com/Netflix/falcor/](https://github.com/Netflix/falcor/)

- [https://github.com/graphistry/falcor](https://github.com/graphistry/falcor)
