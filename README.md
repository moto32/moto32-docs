# Moto32 Documentation

![Moto32 Logo](./public/mountains.webp)

> **Complete documentation for the Moto32 open-source motorcycle control unit**

## 🏍️ About Moto32

Moto32 is an **open-source alternative to the Motogadget M-Unit Blue**, powered by ESP32-S3. It's designed for custom motorcycle builders who want complete control over their bike's electrical system.

**Key Features:**
- 🔧 ESP32-S3 based (dual-core, Wi-Fi, Bluetooth)
- ⚡ 8 MOSFET-protected outputs
- 🔌 USB-C programming interface
- 🛡️ Automotive-grade protection circuits
- 📦 Complete hardware design files
- 💻 Example firmware and libraries
- 📚 Comprehensive documentation

## 📖 Documentation Site

This repository contains the complete documentation for Moto32, built with [Docus](https://docus.dev).

**Live Documentation:** [Visit the docs](#) _(deploy to your hosting)_

## 🚀 Quick Start

### For Users

1. **Order PCBs**: Visit [PCBWay project page](https://www.pcbway.com/project/shareproject/Motogadget_Clone_0a54cb40.html)
2. **Get Components**: See [Bill of Materials](https://github.com/jaksatomovic/motogadget-clone)
3. **Build**: Follow assembly guide
4. **Program**: Upload firmware
5. **Install**: Mount on your motorcycle

### For Documentation Contributors

```bash
# Clone this repository
git clone https://github.com/yourusername/moto32-docs.git
cd moto32-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the documentation site.

## 📁 Project Structure

```
moto32/
├── content/
│   ├── 1.getting-started/
│   │   ├── introduction.md
│   │   ├── installation.md
│   │   └── project-structure.md
│   ├── 2.hardware/
│   │   ├── pcb-overview.md
│   │   ├── schematics.md
│   │   ├── bill-of-materials.md
│   │   ├── assembly.md
│   │   └── 3d-models.md
│   ├── 3.firmware/
│   │   └── getting-started.md
│   ├── 4.assembly/
│   │   └── testing.md
│   └── 5.resources/
│       └── pcbway-sponsor.md
├── public/
│   ├── favicon.ico
│   └── mountains.webp
├── package.json
└── README.md
```

## 🛠️ Built With

This documentation is built using modern web technologies:

- **[Nuxt 4](https://nuxt.com)** - The web framework
- **[Docus](https://docus.dev)** - Documentation theme
- **[Nuxt Content](https://content.nuxt.com)** - File-based CMS
- **[Nuxt UI](https://ui.nuxt.com)** - UI components
- **[Tailwind CSS](https://tailwindcss.com)** - Styling

## 📝 Content Structure

### Documentation Sections

1. **Getting Started**
   - Introduction to Moto32
   - Installation guide
   - Project structure overview

2. **Hardware**
   - PCB design and specifications
   - Complete schematics with explanations
   - Bill of materials with part numbers
   - Assembly instructions
   - 3D models for enclosure design

3. **Firmware**
   - ESP32-S3 development setup
   - Example code and libraries
   - Configuration guides
   - API reference

4. **Assembly & Testing**
   - PCB assembly guide
   - Testing procedures
   - Motorcycle installation
   - Troubleshooting

5. **Resources**
   - PCBWay sponsorship information
   - Community links
   - Additional resources

## 🤝 Contributing

We welcome contributions to improve the documentation!

### How to Contribute

1. **Fork** this repository
2. **Create a branch**: `git checkout -b feature/improvement`
3. **Make your changes** to the markdown files in `/content`
4. **Test locally**: `npm run dev`
5. **Commit**: `git commit -am 'Add new documentation section'`
6. **Push**: `git push origin feature/improvement`
7. **Submit a Pull Request**

### Writing Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Add images/diagrams to illustrate complex concepts
- Follow existing markdown formatting
- Test all links and code snippets

## 🔗 Related Repositories

- **[Hardware & Firmware](https://github.com/jaksatomovic/motogadget-clone)** - PCB design files, schematics, BOM, and firmware
- **Documentation** (this repo) - Complete user and developer documentation

## 💖 Sponsors

### PCBWay

**Special thanks to [PCBWay](https://www.pcbway.com)** for sponsoring PCB fabrication and supporting this open-source project!

PCBWay provides:
- High-quality PCB manufacturing
- PCB assembly services
- Fast turnaround times
- Excellent customer support

[Order Moto32 PCBs on PCBWay →](https://www.pcbway.com/project/shareproject/Motogadget_Clone_0a54cb40.html)

## 📄 License

This documentation is released under the **MIT License**, same as the Moto32 hardware project.

See [LICENSE](./LICENSE) for details.

## 🌟 Acknowledgments

- **Espressif Systems** for the amazing ESP32 platform
- **Motogadget** for inspiration with their M-Unit product
- **PCBWay** for manufacturing sponsorship
- **Open-source community** for tools and support
- All contributors who help improve this project

## 📞 Support & Community

- **GitHub Issues**: [Report bugs or request features](https://github.com/jaksatomovic/motogadget-clone/issues)
- **Discussions**: [Ask questions and share builds](https://github.com/jaksatomovic/motogadget-clone/discussions)
- **Email**: [your-email@example.com]

## 🚀 Deployment

This documentation can be deployed to various platforms:

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.output/public
```

### Static Hosting

```bash
npm run build
# Upload .output/public folder to your hosting
```

## 📊 Status

- **Documentation**: ✅ Complete
- **Hardware v1.0**: ✅ Released
- **Firmware**: 🔧 In development
- **Community**: 🌱 Growing

---

## ⭐ Star This Project

If you find this documentation helpful, please consider starring the repository!

**Built with ❤️ by the Moto32 community**
