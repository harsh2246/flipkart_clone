    import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';
    import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
    import { MantineLogo } from '@mantine/ds';

    const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(50),
        border:'1px solid black',    
        
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
      
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[9],
        borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    logo: {
        maxWidth: rem(200),

        [theme.fn.smallerThan('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        },
    },

    description: {
        marginTop: rem(5),
        [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xs,
        textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
        display: 'none',
        },
    },

    wrapper: {
        width: rem(160),
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        '&:hover': {
        textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.colorScheme === 'dark' ? theme.white : theme.white,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,

        [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xs,
        },
    },
    }));

 

    export default function FooterLinks({ data=[
        {
          title: 'About',
          links: [
            { label: 'Features', link: 'https://example.com/link1' },
            { label: 'Pricing', link: 'https://example.com/link2' },
            { label: 'Support', link: 'https://example.com/link3' },
            { label: 'Forums', link: 'https://example.com/link4' },
            // Add more links here as needed
          ],
        },
        {
          title: 'Projects',
          links: [
            { label: 'Contribute', link: 'https://example.com/link3' },
            { label: 'Media Assests', link: 'https://example.com/link4' },
            { label: 'Changelog', link: 'https://example.com/link3' },
            { label: 'Releases', link: 'https://example.com/link4' },
            // Add more links here as needed
          ],
        },
        {
          title: 'Community',
          links: [
            { label: 'Join Discord', link: 'https://example.com/link3' },
            { label: 'Follow on Twitter', link: 'https://example.com/link4' },
            { label: 'Email newsletter', link: 'https://example.com/link3' },
            { label: 'Github discussion ', link: 'https://example.com/link4' },
            // Add more links here as needed
          ],
        },
        // Add more groups here as needed
      ] }) {
        const { classes } = useStyles();
      
        const groups = data.map((group) => {
          const links = group.links.map((link, index) => (
            <Text
              key={index}
              className={classes.link}
              component="a"
              href={link.link}
              onClick={(event) => event.preventDefault()}
            >
              {link.label}
            </Text>
          ));
      
          return (
            <div className={classes.wrapper} key={group.title}>
              <Text className={classes.title}>{group.title}</Text>
              {links}
            </div>
          );
        });
      
        return (
          <footer className={classes.footer}>
            <Container className={classes.inner}>
              <div className={classes.logo}>
                
                <img src="./footer_flipkart.jpg" width={150} height={80}/>
                <Text size="xs" color="dimmed" className={classes.description}>
                  Build fully functional accessible web applications faster than ever
                </Text>
              </div>
              <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
              <Text color="dimmed" size="sm">
                © 2020 Flipkart.dev. All rights reserved.
              </Text>
      
              <Group spacing={0} className={classes.social} position="right" noWrap>
                <ActionIcon size="lg">
                  <IconBrandTwitter size="1.05rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon size="lg">
                  <IconBrandYoutube size="1.05rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon size="lg">
                  <IconBrandInstagram size="1.05rem" stroke={1.5} />
                </ActionIcon>
              </Group>
            </Container>
          </footer>
        );
      }